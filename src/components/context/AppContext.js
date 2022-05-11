import React, { createContext, useContext, useEffect, useState } from 'react'
import {getItem} from "../../data/getData"
//creo el contexto
const AppContext = createContext()
//lo identifico y exporto para usarlo
export const useAppContext=()=>useContext(AppContext) 

const AppContextProvider = ({children}) => {
  //array con los productos
    const [products, setProducts] = useState([]);
    //seteo el item en el array
    useEffect(() => {
      getItem().then((resp)=>setProducts(resp))
    }, [])
    
  return <AppContext.Provider value={{products}}>{children}</AppContext.Provider>
}

export default AppContextProvider