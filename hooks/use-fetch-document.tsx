"use client"

import { useEffect, useState } from "react"
import { db } from "@/firebase-config"
import { doc, getDoc } from "firebase/firestore"

interface UseFetchDocumentProps {
  collection: string
  document: string
}

export const useFetchDocument = ({
  collection,
  document,
}: UseFetchDocumentProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    console.log("wtf document", document)
    console.log("wtf collection", collection)

    if (!collection || !document) return

    const docRef = doc(db, collection, document)

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data())
        } else {
          console.log("No such document!")
          setData(null)
        }
      })
      .catch((error) => {
        // set error toast
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [collection, document])

  return { loading, error, data }
}
