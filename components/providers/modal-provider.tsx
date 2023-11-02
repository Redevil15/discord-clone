"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"
import { InviteModal } from "@/components/modals/invite-modal"
import { EditServerModal } from "@/components/modals/edit-server-modal"
import { MembersModal } from "@/components/modals/members-modal"

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
      <InviteModal />
      <EditServerModal />
      <MembersModal />
    </>
  )
}

