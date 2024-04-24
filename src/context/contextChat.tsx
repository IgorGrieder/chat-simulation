import { message } from "@/types/types";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type addAction = {
  type: 'add'
  payload: {
    sentBy: string
    body: string
  }
}

type Action = addAction

type Context = {
  chatHistory: message[]
  dispatch: Dispatch<Action>
}

const chatReducer = (chat: message[], action: Action) => {
  switch(action.type) {
    case 'add':
      return [...chat, { whoSent: action.payload.sentBy, body: action.payload.body }]
    default:
      alert('Ação inválida')
      return chat
  }
}

export const chatHistoryCtx = createContext<Context | null>(null)

const ContextChat = ({ children }: {children: ReactNode}) => {
  const [chatHistory, dispatch] = useReducer(chatReducer, [])

  return (
    <chatHistoryCtx.Provider value={{chatHistory, dispatch}}>
      {children}
    </chatHistoryCtx.Provider>
  )
}

export default ContextChat