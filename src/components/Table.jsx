import React from 'react'
import { useContext } from 'react'
import DataContext from "../context/DataContext"
import TableItem from './TableItem'


function Table() {
    const {filtered} = useContext(DataContext)

    

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
                    {filtered.map((item) => (
                     <TableItem key={item.id} item={item} />
                     ))}
                </table>
             </div>
        </div>
    )


  
}

export default Table