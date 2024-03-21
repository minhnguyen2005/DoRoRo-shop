import { useEffect, useState } from 'react'
import './App.css'
import {Spin} from 'antd'
import'bootstrap/dist/css/bootstrap.min.css'
import StoreContext from './contexts/StoreContext'
import Router from './router/Routerr'

function App() {
 const [store,setStore]=useState({
  email:''
 })
 const [isloding, setIsLoding]=useState(true)
 useEffect(()=>{
  handleGetLoginData()
 },[])
  const handleGetLoginData=()=>{
    const email = localStorage.getItem('email');
    email && setStore({email})
    setIsLoding(false)
  }

  return isloding?<Spin/>:(
    <>
     <StoreContext.Provider value={{store,setStore}}>
     <Router/>
     </StoreContext.Provider>
     
    </>
  )
}

export default App
