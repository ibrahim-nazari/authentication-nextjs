import React, { useContext, useEffect } from 'react'
import Header from "./Header"
import firebase from "../../firebaseClient"
import { useContextHook } from '../store'
import { ToastContainer } from 'react-toastify';
import nookies from "nookies"
const Authenticate = ({children}) => {
    const {state,dispatch}=useContextHook();
    useEffect(() => {
       return firebase.auth().onIdTokenChanged( async user=>{
           if(!user){
            dispatch({
                type:"LOGOUT"
            }) 
            nookies.set(undefined,"token","",{});
           }else{
              const token=  await user.getIdToken();
              nookies.set(undefined,"token",token,{});
              dispatch({type:"LOGIN",payload:user})
            
           }
       })
    }, [])
    return (
        <div>
            <ToastContainer />
            <Header/>
          {children}  
        </div>
    )
}

export default Authenticate
