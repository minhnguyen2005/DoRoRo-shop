import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/css/bootstrap.min.css'
import {Button,Badge, Input} from 'antd'
import{} from '../data/shirts'
import {Link} from 'react-router-dom'
import {ShoppingCart}from 'iconsax-react'
const Home = () => {
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
     <Badge count={(0)}>
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

    <div className='content'>
    <h1>T-shirt</h1>
    </div>
<div className='T-shirt row row-cols row-cols-md-7 g-4  '>

 <div  className="col "> 
  <div className='card h-100 '>
   <img src='src/img/shirts/VansFlowerPowerbackprinttshirtinwhite.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
 </div>

  <div className="col ">
   <div className='card h-100'>
    <img src='src/img/shirts/Vansfullpatchlogochestprintintshirtblack.jpg'width={210}></img>
    <Button style={{width:210,marginLeft:27}}>add to cart</Button>
   </div>
  </div>
  
  <div className="col "> 
    <div className='card h-100'>
    <img src='src/img/shirts/VansHolderStbackprinttshirtincreamWhite.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>

  <div className="col "> 
  <div className='card h-100'>
   <img src='src/img/shirts/VansMiniDualPalmIIbackprinttshirtinblack.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>

  <div className="col "> 
  <div className='card h-100'>
   <img src='src/img/shirts/VansPalmbackprint tshirtinblack.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>

  <div className="col "> 
  <div className='card h-100'>
   <img src='src/img/shirts/VansTrippyGrinTShirt in Schwarz mitfloralemRückenprint.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>

  <div className="col "> 
  <div className='card h-100'>
   <img src='src/img/shirts/Vans Authentic OTW back print t-shirt in black.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>

  <div className="col "> 
  <div className='card h-100'>
   <img src='src/img/shirts/Vans Lift Em High t-shirt in white.jpg'width={210}></img>
   <Button style={{width:210,marginLeft:27}}>add to cart</Button>
  </div>
  </div>
</div>



    </>
  )
}

export default Home