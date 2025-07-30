import React, { useState, useEffect } from 'react'
import socket from '../sockets/chatSocket.js'


function Chat() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState({
    user: '',
    room: '',
    message: '',
    time: null
  })

  useEffect(() => {
    socket.on('privateChat', (data) => {

    })

    return () => {

    }
  }, [])


  return (
    <div className='h-[80%] w-[80%] bg-black text-white'>

    </div>
  )
}

export default Chat
