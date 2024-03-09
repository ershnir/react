import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='flex justify-between bg-blue-950 h-11 font-sans '> 
        <img src="/images/pesawat.png"  className='w-auto' alt="" />
        <div>
        <Link to='/home' className='text-white font-semibold mr-0.5'> Home </Link>
        <Link to='/dashboard' className='text-white font-semibold'> Dashboard </Link>
        </div>
    </div>
  )
}

export default Footer