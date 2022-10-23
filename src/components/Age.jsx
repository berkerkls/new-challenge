import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'



function Age({all, setFiltered, activeAge, setActiveAge}) {


  useEffect(() => {
    if(activeAge === "All") {
      setFiltered(all)
      return;
    }

    const filtered = all.filter((unit) => unit.age === activeAge)
    setFiltered(filtered)
  },[activeAge])


  return (
    <>
        <div className="ages">
            <h3>Ages</h3>
            <div className="buttons">
                <button onClick={() => setActiveAge("All")}>All</button>
                <button onClick={() => setActiveAge("Dark")}>Dark</button>
                <button onClick={() => setActiveAge("Feudal")}>Feudal</button>
                <button onClick={() => setActiveAge("Castle")}>Castle</button>
                <button onClick={() => setActiveAge("Imperial")}>Imperial</button>
            </div>
        </div>
    </>
  )
}

export default Age