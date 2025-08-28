import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  return (
    <div id="nav" className='flex justify-between items-center h-10 w-[550px] text-center rounded-full border  '>
      <div id="logo" className=''>
        <li className='text-2xl bold list-none  '><NavLink to='/'>ChatApp</NavLink></li>
      </div>
      <ul className="flex gap-7 text-lg mr-5">
        <li className=" hover:text-blue-300 cursor-pointer "><NavLink to='/'>Home</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/chat'>Chat</NavLink></li>
        <li className="hover:text-blue-300 cursor-pointer"><NavLink to='/register'>Register</NavLink></li>
      </ul>
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          ☰
        </button>
      </div>



    </div>
  )
}

export default Navbar
