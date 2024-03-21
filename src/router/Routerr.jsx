import {useContext} from 'react'
import HomePage from '../pages/Home'
import AuthRouther from '../pages/Authrouther'
import StoreContext from '../contexts/StoreContext'
const Router = () => {
    const context =useContext(StoreContext)
    console.log(context)
  return (

    <>{!context.store.email?<AuthRouther/>:<HomePage/>}</>
  )
}

export default Router