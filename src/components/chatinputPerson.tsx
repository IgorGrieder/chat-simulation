type Props = {
  userName: string;
}

const ChatInputPerson = ({ userName }: Props) => {
  return (
    <form action="" className="flex w-full">
      <input
        type="text"
        className="w-full bg-transparent text-gray-900 outline-none"
        placeholder={`${userName}, digite sua mensagem e tecle enter`}
      />
    </form>
  )
}

export default ChatInputPerson
