import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({page , link}) => {
  return (
    <div className='flex justify-between bg-blue-950 h-11 font-sans '>
        <h2 className='text-white'>{page}</h2>
        <div  >
        <Link to={link == 'home' ? '/' : link} className='text-white font-semibold mr-0.5'> {link}</Link>
        </div>
    </div>
  )
}

export default Navbar