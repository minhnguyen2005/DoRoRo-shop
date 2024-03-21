import {useContext} from 'react'
import HomePage from '../pages/Home'
import AuthRouther from '../pages/Authrouther'
import StoreContext from '../contexts/StoreContext'
const Router = () => {
    const context =useContext(StoreContext)
    
  return (

    <>{!context.store.email ? <AuthRouther/>:<HomePage/>}</>
  )
}

export default Router