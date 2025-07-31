import React, { useState, useEffect } from 'react'
import socket from '../sockets/chatSocket.js'


function Chat() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState({
    user: '',
    room: '',
    message: '',
    time: null,
  })

  useEffect(() => {
    socket.on('privateChat', (data) => {

    })

    return () => {

    }
  }, [])


  return (
    <div className='h-screen w-full flex justify-center items-center bg-black text-white relative'>
      <div id='chatbox' className='h-[90%] w-[90%] flex ring rounded-md bg-gray-950 shadow-2xl shadow-gray-900 absolute'>
        <div id='onlineUsers' className='h-full w-[25%] text-center'>
          <h1>Users</h1>
        </div>
        <div id="chatSection" className="flex flex-col h-full border-s-2">
          <div className="flex-1 overflow-y-auto">
            {/* Chat messages go here */}
          </div>

          <form className="flex gap-5 justify-center items-center h-20 w-full px-4 py-3 ">
            <input
              type="text"
              placeholder="Type message"
              className="rounded-xl h-10 w-[650px] p-3 text-center"
            />
            <button
              type="submit"
              className="h-10 w-40 bg-amber-500 rounded-lg hover:bg-amber-600 hover:text-gray-600"
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
