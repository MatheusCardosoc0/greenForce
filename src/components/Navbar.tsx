import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='w-full bg-zinc-800 fixed flex justify-center top-0 z-10 '>
      <div className='w-full text-green-500 p-4 flex justify-between items-center'>
        <h1 className='font-bold underline decoration-yellow-500 text-3xl flex items-center'>
          <img src={Logo} width={60} />
          Green Force
        </h1>

        <div className='flex gap-2 text-2xl text-yellow-500'>
          <a className='hover:text-teal-500 cursor-pointer hover:font-bold text-green-500'>Sobre</a>|
          <a className='hover:text-teal-500 cursor-pointer hover:font-bold text-green-500'>Oferta</a>|
          <a className='hover:text-teal-500 cursor-pointer hover:font-bold text-green-500'>Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar