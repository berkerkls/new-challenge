import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import DataContext from '../context/DataContext'

function UnitItem() {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    
    const [singleUnit, setSingleUnit] = useState([])
    
    const costs = JSON.stringify(singleUnit.cost)

    useEffect(() => {
        fetchUnit()
    },[])

    // fetch single unit
    const fetchUnit = async () => {
        const res = await fetch(`http://localhost:5000/units/${id}`)
        const data = await res.json()

        console.log(data)
        setSingleUnit(data)
    }

    

  return (
    <div>
        <Navbar title="Unit Detail Page" />
        <div className='table-content'>
        <table className='char'>
                <tr className='unit-table'>
                    <th className='unit-el'>ID: {singleUnit.id}</th>
                    <th className='unit-el'>Name: {singleUnit.name}</th>
                    <th className='unit-el'>Description: {singleUnit.description}</th>
                    <th className='unit-el'>Min.Required Age: {costs}</th>
                    <th className='unit-el'>Wood Cost: {costs}</th>
                    <th className='unit-el'>Food Costs: {costs}</th>
                    <th className='unit-el'>Gold Cost: {costs}</th>
                    <th className='unit-el'>Build Time: {singleUnit.build_time}</th>
                    <th className='unit-el'>Reload Time: {singleUnit.reload_time}</th>
                    <th className='unit-el'>Hit Points: {singleUnit.hit_points}</th>
                    <th className='unit-el'>Attack: {singleUnit.attack}</th>
                    <th className='unit-el'>Accuracy: {singleUnit.accuracy}</th>
                    
                </tr>
        </table>
        </div>
       
    </div>
  )
}

export default UnitItem