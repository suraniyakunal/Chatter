import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  return (
    <div id="nav" className="w-full border-b py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-11 rounded-full border shadow">
        {/* Logo */}
        <div id="logo" className="ml-7">
          <NavLink to="/" className="text-2xl font-bold">
            Chatter
          </NavLink>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-7 text-lg mr-10">
          <li className="hover:text-blue-300 cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <NavLink to="/chat">Chat</NavLink>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
