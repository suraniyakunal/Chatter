import React, { useState } from "react";
import socket from "../sockets/chatSocket";

const Username = ({ onLogin }) => {
  const [username, setUsername] = useState('')


  const handleUsername = (e) => {
    e.preventDefault()
    socket.emit('set-username', username)
    if (username) {
      onLogin()
    }
    setUsername('')
  }
  return (
    <form className="flex h-screen w-full justify-center items-center text-center">
      <input className="" placeholder="Type your name" type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
      <button className="bg-amber-300 p-4 h-8 w-10 text-white rounded" type="submit" onClick={handleUsername}>Add</button>
    </form>
  )
}

export default Username
