import React from 'react'


const Navbar = () => {

  const navItems = ["About", "Projects", "Contact"];


  return (
    <div id="nav" className='flex  justify-between items-center p-3 w-[50vw] h-10 text-center rounded-full border gap-x-30 '>
      <div id="logo" className='ml-7'>
        <h1 className='font-bold text-2xl'>Chatter</h1>
      </div>
      <div className='space-x-5 font-sans mr-7'>
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className='text-zinc-300'>{item}</a>
        ))}
      </div>

    </div>
  )
}

export default Navbar
