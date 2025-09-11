import React, { useState, useEffect } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md"
import Picker from 'emoji-picker-react'
import socket from '../sockets/chatSocket.js'


function Chat() {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  // const [room, setRoom] = useState([])
  const [users, setUsers] = useState([])
  const [showPicker, setShowPicker] = useState(false)

  const addEmoji = (emoji) => {
    setMessage(prev => [...prev, emoji.native])
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
  }



  useEffect(() => {

    socket.on('online-users', (usr) => {
      setUsers(usr)
    })
    // for future features
    socket.on('global-chat', (data) => {
      setChat(prev => [...prev, data])
    })

    // // socket.on('join-room', (data) => {
    // //   setRoom(prev => [...prev, data])
    // // })
    // //
    //
    // socket.on('create-room', (room) => {
    //   setRoom(prev => [...prev, room])
    // })

    return () => {
      socket.off('online-users')
      socket.off('global-chat')
      // socket.off('join-room')
      // socket.off('create-room')
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    socket.emit('global-chat', message)
    setMessage('')
    // socket.emit('join-room', room)
    // socket.emit('welcome', 'Welcome to the app')
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-black text-white relative'>
      <div id='chatbox' className='h-[90%] w-[90%] flex ring rounded-md bg-gray-950 shadow-2xl shadow-gray-900 absolute'>
        <div id='onlineUsers' className='h-full w-[35%] text-center'>
          <h1>Online users</h1>
          <ul className='w-full h-5'>
            {users ? users.map((usr, id) => (
              <li key={id}>{usr.name}</li>
            )) :
              <p>No user Online</p>}
          </ul>
        </div>
        <div id="chatSection" className="flex flex-col h-full w-full border-s-2">
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="flex flex-col space-y-2">
              {chat.length > 0 ? chat.map((msg, id) => (
                <li
                  key={id}
                  className="text-white p-4 rounded-md max-w-[80%] self-start ml-4"
                >
                  <strong>{msg.from}:</strong> {msg.message}
                </li>
              )) :
                <p>No chats yet</p>}
            </ul>
          </div>
          <form className="flex gap-4 justify-center items-center h-20 w-full px-4 py-3 ">
            <textarea
              value={message}
              type="text"
              placeholder="Type message"
              className=" w-full resize-none p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              onChange={(e) => { setMessage(e.target.value) }}
            />
            <button type='button' onClick={() => setShowPicker(!showPicker)}><MdOutlineEmojiEmotions /></button>
            {showPicker && (
              <Picker onEmojiSelect={addEmoji} />
            )}
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
