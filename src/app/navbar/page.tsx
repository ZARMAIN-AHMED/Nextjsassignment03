'use client'

import React from 'react'
import Link from 'next/link'



function NAVBAR() {

  return (
    <div className='bg-blue-600 h-14 '>
        <div className='text-white flex justify-between items-center '>
          <h1 className='text-4xl m-2'> Navbar </h1>
        <ul className='flex gap-20 mr-7 cursor-pointer'>
          <Link className='hover:text-gray-950 text-3xl' href='/'>Home</Link>
          <Link className='hover:text-gray-950 text-3xl' href='/about'> About</Link>
          <Link className='hover:text-gray-950 text-3xl 'href='/contact'>Contact</Link>
          <Link className='hover:text-gray-950 text-3xl 'href='/footer'>Course</Link>
        </ul>
        </div>
        
    </div>
  )
}

export default NAVBAR



