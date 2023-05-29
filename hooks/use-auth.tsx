"user client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "firebase-config"
import { User } from "firebase/auth"

export const useAuth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (!user) {
        router.push("/login")
      } else {
        setUser(user)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  return {
    loading,
    uid: user?.uid,
    username: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
  }
}
