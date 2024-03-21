import React, { useContext, useEffect, useRef } from 'react'
import'bootstrap/dist/css/bootstrap.min.css'
import {Input, Card, Button, Typography, message} from 'antd'
import StoreContext from '../contexts/StoreContext'
const {Title}= Typography
const LoginScreen = () => {
  const [email, setEmail]=React.useState('')
  const [password, setPassword]=React.useState('')
  const context=useContext(StoreContext)
  console.log(context)
  const emailRef= useRef()
  const passRef=useRef()
  const btnRef=useRef()

  useEffect(()=>{
    emailRef.current?.focus();
  },[])
  const handleLogin=()=>{
     if (email==='tminh@gmail.com'&& password==='1234'){
      context.setStore({...context.store, email})
     }else{
      message.error("Email/Password ko đúng")
     }
  }
  return (
    <div className='container'>
      <Title style={{}}>DoRoRo Shop</Title>
      <div className='row'>
        <div className='col-5  p-5' style={{marginLeft:"28%"}}>
          
          <Card style={{textAlign:"center", padding:10, width:500, }}>
              <Title>Đăng Nhập</Title>
              <Input 
              required
              type='email'
              ref={emailRef}
              size='large'
              value={email}
              placeholder='Email'
              onChange={(value)=>setEmail(value.target.value)}
              onPressEnter={()=> passRef.current.focus()}
              />
              <div className='mt-4'/>
              <Input
                required
                type='password'
                ref={passRef}
                size='large'
                value={password}
                placeholder='Password'
                onChange={(val)=>setPassword(val.target.value)}
                onPressEnter={()=> btnRef.current.click()}
              />
              <div className='mt-4'>
                <Button 
                onClick={handleLogin} 
                ref={btnRef}
                disabled={!email||!password}
                
                >
                  Login
                </Button>
              </div>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default LoginScreen