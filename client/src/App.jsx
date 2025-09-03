import React from 'react'
import './App.css'
import Home from '../src/pages/Home.jsx'
import About from '../src/pages/About.jsx'
import Chat from './chat/components/Chat.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/chat' element={<Chat />} />

        </Route>
      </Routes>
      {/* <div> */}
      {/*   {isLoggedIn ? ( */}
      {/*     <Chat /> */}
      {/*   ) : ( */}
      {/*     <Username onLogin={() => setIsLoggedIn(true)} /> */}
      {/*   )} */}
      {/* </div> */}
    </>
  )
}

export default App
