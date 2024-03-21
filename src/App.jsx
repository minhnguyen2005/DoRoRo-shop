import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.min.css'
import StoreContext from './contexts/StoreContext'
import Router from './router/Routerr'

function App() {
 const [store,setStore]=useState({
  email:''
 })
  

  return (
    <>
     <StoreContext.Provider value={[store,setStore]}>
     <Router/>
     </StoreContext.Provider>
      <Routes>
            <Route path='/Home' element={<HomePage/>}></Route>
      </Routes>
    
     
    </>
  )
}

export default App
