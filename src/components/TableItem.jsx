import React from 'react'

function TableItem({item}) {
  return (  
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><span>Wood: </span>, <span>Gold: </span></td>
                </tr>
  )
}

export default TableItem