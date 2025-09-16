import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  return (
    <div id="nav" className="flex justify-around items-center shadow-2xl w-full h-20 py-3 px-2">
      {/* Logo */}
      <div id="logo" className="w-30">
        <NavLink to="/" className="text-2xl font-bold">
          Chatter
        </NavLink>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-10 text-lg">
        <div>

        </div>
        <li className="hover:text-blue-300 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <NavLink to="/chat">Chat</NavLink>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-black focus:outline-none">
          ☰
        </button>
      </div>
    </div>
  )
}

export default Navbar
