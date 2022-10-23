import React from 'react'
import Navbar from '../components/Navbar'
import Age from "../components/Age"
import Costs from '../components/Costs'
import Table from '../components/Table'
import DataContext from '../context/DataContext'
import { useContext } from 'react'

function Units() {

  const {data, filtered, setFiltered,
  activeAge, setActiveAge} = useContext(DataContext)


  return (
    <div className='units'>
        <Navbar title="Units Page" />
        <Age all={data} setFiltered={setFiltered} activeAge={activeAge} setActiveAge={setActiveAge} />
        <Costs />
        <Table />
    </div>
  )
}

export default Units