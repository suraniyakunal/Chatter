import React, { useState, useEffect } from 'react'
import socket from '../sockets/chatSocket.js'


function Chat() {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState('')
  const [room, setRoom] = useState('')


  useEffect(() => {
    socket.on('private-chat', (data) => {
      setChat(prev => [...prev, data])
      console.log("Hello", data)
    })

    socket.on('join-room', (data) => {
      setRoom(prev => [...prev, data])
    })

    return () => {
      socket.off('private-chat')
      socket.off('join-room')
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    socket.emit('private-chat', message)
    socket.emit('join-room', room)
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-black text-white relative'>
      <div id='chatbox' className='h-[90%] w-[90%] flex ring rounded-md bg-gray-950 shadow-2xl shadow-gray-900 absolute'>
        <div id='onlineUsers' className='h-full w-[35%] text-center'>
          <h1>Users</h1>
          <ul>

          </ul>
        </div>
        <div id="chatSection" className="flex flex-col h-full w-full border-s-2">
          <div className="flex-1 overflow-y-auto">
            {chat.map((msg, id) => (
              <li key={id}>{msg.message}</li>
            ))}
          </div>

          <form className="flex gap-4 justify-center items-center h-20 w-full px-4 py-3 ">
            <input
              type="text"
              placeholder="Type message"
              className="text-left rounded-xl h-10 w-[650px] ring p-3"
              onChange={(e) => { setMessage(e.target.value) }}
            />
            <button
              type="submit"
              className="h-10 w-40 bg-amber-500 rounded-lg hover:bg-amber-600 hover:text-gray-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat
