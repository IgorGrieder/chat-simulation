import { chatHistoryCtx } from "@/context/contextChat";
import { useContext, useState } from "react";

type Props = {
  userName: string;
}

const ChatInputPerson = ({ userName }: Props) => {
  const chatCtx1 = useContext(chatHistoryCtx)
  const [input, setInput] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault() // previnir de atualizar a pagina
    if (input !== "") {
      // checando se o input esta vazio para enviar uma mensagem
      chatCtx1?.dispatch({
        // adicionando no reducer
        type: "add",
        payload: {
          sentBy: userName,
          body: input,
        },
      })
      setInput("") // limpando area de input
    }
  }

  return (
    <form className="flex w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full bg-transparent text-gray-900 outline-none"
        placeholder={`${userName}, digite sua mensagem e tecle enter`}
        value={input}
        onChange={(event) => { setInput(event.target.value) }}
      />
    </form>
  )
}

export default ChatInputPerson