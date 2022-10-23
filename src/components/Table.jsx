import React from 'react'
import { useContext } from 'react'
import DataContext from "../context/DataContext"
import TableItem from './TableItem'


function Table() {
    const {data} = useContext(DataContext)

  return (
    <div>
        <div className="table-content">
            <table className='char'>
                <tr className='table-el'>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>costs</th>
                </tr>
                {data.map((item) => (
                    <TableItem key={item.id} item={item} />
            ))}
            </table>
            


            {/* <table className='char'>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>costs</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Archer</td>
                    <td>Feudal</td>
                    <td><span>Food</span>:25, <span>Gold</span>: 45</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Crossbowman</td>
                    <td>Castle</td>
                    <td><span>Wood</span>:25, <span>Gold</span>:45</td>
                </tr>
            </table> */}
        </div>
    </div>
  )
}

export default Table