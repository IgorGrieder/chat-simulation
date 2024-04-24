type Props = {
  userName: string
  setUserName: (str:string) => void
  showChat: () => void
}

const STORAGE_NAME = "nameUser"

const StartChat = ({ userName, setUserName, showChat }: Props) => {

  const handleAdd = () => {
    if (userName !== '') {
      showChat()
      localStorage.setItem(STORAGE_NAME, JSON.stringify(userName))
    }
  }
  
  return (
    <div className="flex items-center gap-4">
      <input 
        type="text"
        className="rounded-sm border border-white bg-transparent px-5 py-2 font-light outline-none" 
        placeholder="Your name..."
        onChange={(event) => { setUserName(event.target.value) }}
        value={userName}/>
      <button className="rounded-lg border border-white bg-transparent px-5 py-2 capitalize" onClick={handleAdd}>Start Chat</button>
    </div>
  )
}

export default StartChat