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
    <div className='min-h-screen min-w-full flex justify-center items-center bg-black text-white relative'>
      <div id='chatbox' className='h-[90%] w-[90%] flex ring bg-gray-950 shadow-2xl shadow-gray-900 absolute'>
        <div id='onlineUsers' className='h-full w-[25%] border-2'>
          <h1>Users</h1>
        </div>
        <div id='chatSection' className='h-full w-full border-2 items-end'>
          <form className='flex gap-5 justify-center items-center h-20 w-full '>
            <input
              type="text"
              name=""
              value=""
              placeholder='Type message'
              className='
              rounded-xl text-center
              h-10 w-[650px] ml-12 p-3'
            />
            <button
              type="submit"
              className='
              h-10 w-40 bg-amber-500
              rounded-lg hover:bg-amber-600
              hover:text-gray-600
              hover:h-8 hover:w-35'
            >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat
