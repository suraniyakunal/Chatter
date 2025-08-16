import React, { useState, useEffect } from 'react'
import socket from '../sockets/chatSocket.js'


function Chat() {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState('')
  const [room, setRoom] = useState([])


  useEffect(() => {
    socket.on('private-chat', (data) => {
      setChat(prev => [...prev, data])
      console.log("vtdytduuyfyf")
    })

    socket.on('join-room', (data) => {
      setRoom(prev => [...prev, data])
    })

    socket.on('create-room', (room) => {
      setRoom(prev => [...prev, room])
    })

    return () => {
      socket.off('private-chat')
      socket.off('join-room')
      socket.off('create-room')
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    socket.emit('private-chat', message)
    socket.emit('join-room', room)
    socket.emit('welcome', 'Welcome to the app')
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-black text-white relative'>
      <div id='chatbox' className='h-[90%] w-[90%] flex ring rounded-md bg-gray-950 shadow-2xl shadow-gray-900 absolute'>
        <div id='onlineUsers' className='h-full w-[35%] text-center'>
          <h1>Rooms</h1>
          <ul className='w-full h-5'>
            {room ? room.map((r, id) => (
              <li key={id}>{r}</li>
            )) :
              <p>No rooms yet prevent</p>}
          </ul>
        </div>
        <div id="chatSection" className="flex flex-col h-full w-full border-s-2">
          <div className="flex-1 overflow-y-auto">
            {chat ? chat.map((msg, id) => (
              <li key={id}>{msg.message}</li>
            )) :
              <p>No chats yet</p>}
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
