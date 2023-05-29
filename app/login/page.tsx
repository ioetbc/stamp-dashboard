"use client"

import { useRouter } from "next/navigation"
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

import { Button } from "@/components/ui/button"

import { auth, db } from "../../firebase-config"

export default function Page() {
  const provider = new GoogleAuthProvider()
  const router = useRouter()

  const signInWithGoogle = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithPopup(auth, provider)
          .catch((error) => console.log("error signin", error))
          .then(async (result: any) => {
            const userDocRef = doc(db, "users", result?.user.uid!)
            await setDoc(
              userDocRef,
              {
                is_active: true,
                email: result?.user.email,
                image: result?.user.photoURL,
                username: result?.user.displayName,
                updated_at: new Date(),
              },
              { merge: true }
            ).then(() => {
              router.push("/")
            })
          })
      })
      .catch((error) => console.log("error setting persistence", error))
  }

  return (
    <>
      <Button onClick={() => signInWithGoogle()}>Sign in with Google</Button>
    </>
  )
}
