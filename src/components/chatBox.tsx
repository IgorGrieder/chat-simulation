import ChatInputBot from "./chatInputBot"
import ChatArea from "./chatArea"
import ChatInputPerson from "./chatinputPerson"

const ChatBox = () => {
  return (
    <div className="flex size-[500px] flex-col items-center rounded-2xl border border-white/30 bg-gray-700 px-5 py-8">
      <ChatArea></ChatArea>
      <div className="mt-auto w-full">
        <ChatInputBot></ChatInputBot>
        <ChatInputPerson></ChatInputPerson>
      </div>
    </div>
  )
}

export default ChatBox