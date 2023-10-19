"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false)

  useEffect(() => {
    setisMounted(true)
  }, [])


  if (!isMounted) {
    return null
  }
  
  return (
    <>
      <CreateServerModal />
    </>
  )
}

