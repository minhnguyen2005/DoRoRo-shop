import {createContext} from 'react'

const initValue =  {
    theme:'light',
    language:'vie',
    email:''

  
}
const StoreContext = createContext(initValue);
export default StoreContext