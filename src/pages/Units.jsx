import React from 'react'
import Navbar from '../components/Navbar'
import Age from "../components/Age"
import Costs from '../components/Costs'
import Table from '../components/Table'

function Units() {
  return (
    <div className='units'>
        <Navbar title="Units Page" />
        <Age />
        <Costs />
        <Table />
    </div>
  )
}

export default Units