'use client'

import React from 'react'
import NAVBAR from "./navbar/page";
import ABOUT from "./about/page";
import FOOTER from "./footer/page";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CONTACT from './contact/page';

function HOME() {
 const route = useRouter () 
  return (
    <div>
      <NAVBAR/>
      <ABOUT/>
      <FOOTER/>
      <CONTACT/>
    </div>
  )
}

export default HOME