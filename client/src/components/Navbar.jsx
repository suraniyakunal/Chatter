import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  return (
    <div id="nav" className="flex justify-center items-center w-full h-20 py-3 px-2">
      <div className="m-3 p-3 w-2/3 flex justify-center items-center h-11 rounded-lg border shadow-md">
        {/* Logo */}
        <div id="logo" className="">
          <NavLink to="/" className="text-2xl font-bold">
            Chatter
          </NavLink>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-7 text-lg">
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
    </div>
  )
}

export default Navbar
