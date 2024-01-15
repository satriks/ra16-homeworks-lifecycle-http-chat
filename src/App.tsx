

import './App.css'
import { useEffect, useState } from 'react'
import NewMessage from './components/NewMessage'
import MessageService from './components/MessageService'
import Messages from './components/Messages'
import { v4 } from "uuid"

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setLoading] = useState(false)
  let userId: string | null= localStorage.getItem('userId')
  if (!userId) {

    userId = v4() 
    localStorage.setItem('userId', userId)
  }

  const id: string | 0  = messages.length && (messages[messages.length -1] as {id:string}).id
  
  
  useEffect(() => {

    const getMessages =  async (id: string) => {
      const data = await MessageService.getMessages(id)
      setMessages([...messages, ...data])
      
      
    }
    void getMessages(id.toString())
    setInterval((id : string) =>{
       getMessages(id)
       setLoading(false)
      }, 5000 )

    
  }, [])

  return (
    <div className='chat__wrapper'>
      <h2 className='chat__title'>Anonymous chat</h2>
      <Messages  messages={messages} userId={userId} isLoading={isLoading}/>

      <NewMessage userId={userId} setLoading={setLoading}/>
    </div>

  )
}

export default App
