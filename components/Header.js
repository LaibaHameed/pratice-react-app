"use client"
import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  
  return (
    <>
    <nav> 
    <h3>
      <Link id='link' href='/app'>Logo</Link>
    </h3>
      <Link id='link' href='/Courses'>Courses</Link>
      <Link id='link' href='/About'> About us</Link>
      <Link id='link' href='/Contact'> Contact us</Link>
      <Link id='link' href='/Account'> login</Link>
      <Nav/>
      </nav>
    </>
  )
}

export default Header