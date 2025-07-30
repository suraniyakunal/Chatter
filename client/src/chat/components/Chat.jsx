import React, { useState, useEffect } from 'react'

function Chat() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState({
    user: '',
    room: '',
    message: '',
    time: null
  })

  useEffect(() => {


    return () => {

    }
  }, [])


  return (
    <div>

    </div>
  )
}

export default Chat
