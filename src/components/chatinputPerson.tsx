import { chatHistoryCtx } from "@/context/contextChat";
import { useContext, useState } from "react";

type Props = {
  userName: string;
}

const ChatInputPerson = ({ userName }: Props) => {
  const chatCtx = useContext(chatHistoryCtx)
  const [input, setInput] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault() // previnir de atualizar a pagina

    // setando o tempo atual da mensagem
    const timeNow = new Date()
    const min = timeNow.getMinutes().toString().padStart(2, "0") // certificando que terao dois digitos sendo exibidos
    const hours = timeNow.getHours().toString().padStart(2, "0")

    if (input !== "") {
      // checando se o input esta vazio para enviar uma mensagem
      chatCtx?.dispatch({
        // adicionando no reducer
        type: "add",
        payload: {
          sentBy: userName,
          body: input,
          time: `${hours}:${min}`,
        },
      })
      setInput("") // limpando area de input

      // lidando com focus apos enviar dados
      const inputHTML = (event.currentTarget as HTMLFormElement).querySelector("input")
      if (inputHTML) {
        inputHTML.blur(); // limpando focus
      }
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