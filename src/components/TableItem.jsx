import React from 'react'
import {NavLink} from "react-router-dom"
import {useState} from "react"
import { useEffect } from 'react'


function TableItem({item}) {
    const costs = JSON.stringify(item.cost)

  return (     
                    <tr>
                        <NavLink className="link" to={`${item.id}`}>{item.id}</NavLink>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td className='gold-wood'>{costs !=null ? costs : "There is no costs"}</td>
                    </tr>
  )
}

export default TableItem