type Props = {
  whoSent: string
}

const Message = ({ whoSent }: Props) => {
  return (
    <div className={`flex w-full bg-transparent ${whoSent === 'bot' ? (`justify-start`) : (`justify-end`)} mb-5`}>
      {/* whoSent vai determinar se o alinhamento dos items estara a direita ou a esquerda*/}
      <div className="flex max-w-[300px] flex-col items-start rounded-xl border border-gray-500 px-8 py-3">
        <h1 className="mb-2 font-bold">Quem Mandou</h1>
        <p className="max-w-[20ch] text-base font-light">Mensagem triste de quem mandou uau</p>
      </div>
    </div>
  )
}

export default Message