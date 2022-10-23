import { createContext, useEffect, useState } from "react";


const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetchData()
    },[])

    // fetch data
    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/units?_&_order=incrsort=id")
        const data = await res.json()

        setData(data)
        console.log(data)
    }


    return <DataContext.Provider 
    value={{
        data
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext