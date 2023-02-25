import React from 'react'
import { auth } from '../firebase'  

const style={
    button:`bg-green-200 px-4 py-2 hover:bg-green-100 `
}



const LogOut = () => {
    const signOut=()=>{
        signOut(auth);
    };
  return (
    <button onClick={()=>{auth.signOut()}} className={style.button}>
        Logout
    </button>
  )
}
export default LogOut;