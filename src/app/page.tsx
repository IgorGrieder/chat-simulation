'use client'

import StartChat from "@/components/startChat"
import ChatBox from "@/components/chatBox"
import { useEffect, useState } from "react"

const STORAGE_NAME = "nameUser"

export default function Home() {
  const [userName, setUserName] = useState('')
  const [showChatBox, setShowChatBox] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_NAME) !== null) {
      setShowChatBox(true)
      setUserName(JSON.parse(localStorage.getItem(STORAGE_NAME) ?? ''))
    }
  },[])

  const handleShowChat = () => {
    setShowChatBox(true)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black p-10">
      <h1 className="mb-10 text-center text-3xl font-light text-white">
        Chat Simulation
      </h1>
      {showChatBox ? (
        <ChatBox userName={userName}></ChatBox>
      ) : (
        <StartChat
          userName={userName}
          setUserName={setUserName}
          showChat={handleShowChat}
        ></StartChat>
      )}
    </div>
  );
}
