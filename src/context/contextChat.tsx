import { message } from "@/types/types";
import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";

type addAction = {
  type: 'add'
  payload: {
    sentBy: string
    body: string
    time: string
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
      return [...chat, { whoSent: action.payload.sentBy, body: action.payload.body, time: action.payload.time }]
    default:
      alert('Ação inválida')
      return chat
  }
}

export const chatHistoryCtx = createContext<Context | null>(null)

// preparando para salvar chat no localStorage
const STORAGE_KEY = 'chat'

const ContextChat = ({ children }: {children: ReactNode}) => {
  const [chatHistory, dispatch] = useReducer(chatReducer, 
    JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') // transformando JSON em objeto, caso seja undefined o storage retorna um array vazio
  )

  // salvando alteracoes no local storage sempre que chatHistory sofrer alteracoes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory)) // convertendo chatHistory para JSON
  }, [chatHistory])
  
  return (
    <chatHistoryCtx.Provider value={{chatHistory, dispatch}}>
      {children}
    </chatHistoryCtx.Provider>
  )
}

export default ContextChat