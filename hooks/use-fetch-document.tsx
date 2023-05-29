"use client"

import { useEffect, useState } from "react"
import { db } from "@/firebase-config"
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"

import { IFirestore } from "@/types/firestore"

interface UseFetchDocumentProps {
  collectionRef: string
  document: string
}

export const useFetchDocument = ({
  collectionRef,
  document,
}: UseFetchDocumentProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState<IFirestore | null>(null)

  useEffect(() => {
    if (!collectionRef || !document) return

    const docRef = doc(db, collectionRef, document)

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data())

          // Fetch loyalty_card subcollection
          const loyaltyCardRef = collection(docRef, "loyalty_card")
          getDocs(query(loyaltyCardRef))
            .then((loyaltyCardSnap) => {
              const loyaltyCards = loyaltyCardSnap.docs.map((doc) => doc.data())
              setData((data: any) => ({ ...data, loyalty_card: loyaltyCards }))
            })
            .catch((error) => {
              // set error toast
              setError(error)
            })
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
