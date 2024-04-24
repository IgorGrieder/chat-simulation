type Props = {
  whoSent: string
  body: string
}

const Message = ({ whoSent, body }: Props) => {
  return (
    <div className={`flex w-full bg-transparent ${whoSent === 'bot' ? (`justify-start`) : (`justify-end`)} mb-5`}>
      {/* whoSent vai determinar se o alinhamento dos items estara a direita ou a esquerda*/}
      <div className="flex max-w-[300px] flex-col items-start rounded-xl border border-gray-500 py-3 pl-3 pr-8">
        <h1 className="mb-2 font-bold capitalize">{whoSent}</h1>
        <p className="max-w-[20ch] text-base font-light">{body}</p>
      </div>
    </div>
  )
}

export default Message