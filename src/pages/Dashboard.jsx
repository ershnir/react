import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const Dashboard = () => {
  return (
    <div>
        <Navbar page='dashboard' link='home'   />
        <Footer />
        <p className='text-7xl text-slate-900'>Welcome to website</p>
        <br />
    </div>
  )
}

export default Dashboard