import React from 'react'
import './App.css'
import Home from '../src/pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
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
