import { useState } from 'react'
import './App.css'
import {Badge, Button, Input} from 'antd'
import HomePage from './pages/Home'
import {Routes,Route,Link} from 'react-router-dom'
import {ShoppingCart}from 'iconsax-react'
import'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [, ] = useState(0)

  return (
    <>
     <header>
     <div className='container'>
     <div className='nav-bar '>
     <a className='logo'><Link to={'/Home'}>DoRoRo</Link></a>
     <ul>     
      <li className='link'><a><Link to={'/Home'}>Home</Link></a></li>
      <li className='link'><a><Link to={'/Home'}>Product</Link></a></li>
      <li className='link'><a><Link to={'/Home'}>Sale</Link></a></li>
      <li className='link'><a><Link to={'/Home'}>About</Link></a></li>
     </ul>

     <Badge count='5'>
        <ShoppingCart  style={{ color:'black'}}/>
        </Badge>
     </div>
     </div>
     </header>
    
    <div className='mid-head'>
      <div className=''>
        <Input placeholder='Tìm kiếm' style={{width:700, height:40,}}></Input>
        <Button style={{height:40, width:130, }}>Search</Button>
      </div>

      </div>     
      

     
      <Routes>
            <Route path='/Home' element={<HomePage/>}></Route>
        </Routes>
    </>
  )
}

export default App
