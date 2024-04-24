'use client'

import StartChat from "@/components/startChat"
import ChatBox from "@/components/chatBox"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black p-10">
      <h1 className="mb-10 text-center text-3xl font-light text-white">Chat Simulation</h1>
      <StartChat></StartChat>
      <ChatBox></ChatBox>
    </div>
  )
}
