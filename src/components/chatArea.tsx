import { useContext } from "react"
import Message from "./messages"
import { chatHistoryCtx } from "@/context/contextChat"

type Props = {
  userName: string
}

const ChatArea = ({ userName }: Props) => {
  const ctxChat = useContext(chatHistoryCtx)

  // carregando historico do chat para um array que analisa quem enviou a mensagem
  const displayHistory = ctxChat?.chatHistory.map((item, index) => {
    if (item.whoSent === 'bot') {
      return (<Message whoSent="bot" body={item.body} time={item.time} key={index}></Message>)
    } else return (<Message whoSent={userName} body={item.body} time={item.time} key={index}></Message>)
  })

  return (
    <div className="flex max-h-[500px] w-full flex-col overflow-y-scroll bg-scroll">
      {displayHistory}
    </div>
  )
}

export default ChatArea