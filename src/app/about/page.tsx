'use client'
import React from 'react';
import { useRouter } from 'next/navigation';


  function Hero  () {
    const route = useRouter ()
  return (
    <div>
      <div className=' h-screen'>
        <h1 className='text-3xl text-black text-center bg-blue-300'>
          WELCOME TO HERO SECTION
        </h1>
        <div className='flex justify-between items-center mr-60'>
          <ul className='text-7xl m-40'>
            <li>THIS IS MY</li><li> FIRST</li><li>NEXT.JS</li><li>PROJECT</li>
           <center><li><h1 className=' text-2xl bg-black  text-white w-32 rounded-xl p-1 mr-auto  '>
            <button onClick={() => route.push('/footer')}>COURSES</button></h1></li></center>
          </ul>
          <ul className='text-3xl text-black mb-7 '>
            <li>HELLO! <br/>
            I Am "ZARMAIN AHMED"</li>
            <li>I Hope You like my Project</li>
            <li>This Is My Third <br/>Assignment Project</li>
            
          </ul>
        </div>
        </div>

      </div>


  )}

export default Hero
import Link from 'next/link';