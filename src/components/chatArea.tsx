import Message from "./messages"

const ChatArea = () => {
  return (
    <div className="flex w-full flex-col">
      <Message whoSent="bot"></Message>
      <Message whoSent="igor"></Message>
    </div>
  )
}

export default ChatArea