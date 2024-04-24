import ChatInputBot from "./chatInputBot"
import ChatArea from "./chatArea"
import ChatInputPerson from "./chatinputPerson"
import ContextChat from "@/context/contextChat"

type Props = {
  userName: string
}

const ChatBox = ( { userName }: Props) => {
  return (
    <div className="flex size-[500px] flex-col items-center rounded-2xl border border-white/30 bg-gray-700 px-5 py-8">
      <ContextChat>
        <ChatArea></ChatArea>
        <div className="mt-auto w-full">
          <ChatInputBot></ChatInputBot>
          <ChatInputPerson></ChatInputPerson>
        </div>
      </ContextChat>
    </div>
  );
}

export default ChatBox