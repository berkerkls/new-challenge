import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Image'

function Home() {
  return (
    <div className='home'>
        <Navbar title="Home Page" />
        <Image />
    </div>
  )
}

export default Home