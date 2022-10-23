import { createContext, useEffect, useState } from "react";
import TableItem from "../components/TableItem";


const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    const [activeAge, setActiveAge] = useState("All")
    const [isActive, setIsActive] = useState(false)



    useEffect(() => {
        fetchData()
    },[])

    // fetch data
    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/units?_&_order=incrsort=id_limit=20")
        const data = await res.json()

        setData(data)
        setFiltered(data)
        console.log(data.cost)
    }


    


    return <DataContext.Provider 
    value={{
        data,
        filtered,
        setFiltered,
        activeAge,
        setActiveAge,
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext