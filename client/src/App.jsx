import React, { useState } from 'react'
import './App.css'
import Chat from '../src/chat/components/Chat.jsx'
import Username from './chat/components/Username.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <div>
        {isLoggedIn ? (
          <Chat />
        ) : (
          <Username onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </>
  )
}

export default App
