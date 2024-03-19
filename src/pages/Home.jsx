import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'antd'
import{} from '../data/shirts'
const Home = () => {
  return (
    <>
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