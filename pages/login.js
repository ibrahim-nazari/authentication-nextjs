import React, { useEffect, useState } from 'react'
import Authenticate from './components/Authenticate'
import Link from "next/link"
import firebase from '../firebaseClient'
import { provider } from '../firebaseClient'
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'
import { useContextHook } from './store'
import axios from 'axios'
const Login = () => {
    const router=useRouter()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {state:{user}} =useContextHook();
    useEffect(() => {
        
        if(user)router.push("/")
    }, [user,router])
    function googleSignInPopup(e) {
        e.preventDefault();
        firebase.auth()
          .signInWithPopup(provider)
          .then((res) => {
              
           axios.post("/api/user",res.user).then(res=>{
            toast.success("you loged in successfully")
            router.push("/")
           })
            
          }).catch((error) => {
            toast.error(error.message)
          });
       
      }
   const SignIn=()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
  
      toast.success("you loged in successfully");
      router.push("/")
    })
    .catch((error) => {
        toast.error(error.message)
    });
   }
    return (
        <Authenticate>
       <div className="container mt-3  ">
           <div className="d-flex justify-content-center flex-column align-items-center">
              {user? <div className="spinner-grow text-secondary" role="status">
  <span className="sr-only"></span>
</div>:<> <h4>Sign In</h4>
           <div>
               <form>
                   <div className="form-group">
                       <label>Email</label>
                       <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                   </div>
                   <div className="form-group mt-2">
                       <label>Password</label>
                       <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" />
                   </div>
                   <div className="d-flex justify-content-between my-4">
                       <button className="btn btn-sm btn-info" onClick={SignIn}>Login</button>
                       <button className="btn btn-outline-danger btn-sm " onClick={googleSignInPopup}>Login With google</button>
                   </div>
                   <p>Don &apos;t have account <Link href="/createaccount"><a>Sign Up</a></Link></p>
               </form>
           </div></>}
           </div>
           
       </div>
    </Authenticate>
    )
}

export default Login

