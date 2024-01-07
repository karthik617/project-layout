"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const isLoggedIn = true

  useEffect(() => {
    if(isLoggedIn) {
      router.push("/dashboard/home")
  } else {
    router.push("/login")
  }
  },[isLoggedIn])
  return (
    <main className="flex min-h-screen flex-col w-full">
    </main>
  )
}
