const StartChat = () => {
  return (
    <div className="flex items-center gap-4">
      <input 
        type="text"
        className="rounded-sm border border-white bg-transparent px-5 py-2 font-light outline-none" 
        placeholder="Your name..."/>
      <button className="rounded-lg border border-white bg-transparent px-5 py-2 capitalize">Start Chat</button>
    </div>
  )
}

export default StartChat