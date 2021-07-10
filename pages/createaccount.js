import React, { useState } from 'react'
import Authenticate from './components/Authenticate'
import firebase from "../firebaseClient"
import Link from "next/link"
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'
const Createaccount = () => {
    const router=useRouter();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [process,setProcess]=useState(false)
    const SignUp=(e)=>{
        e.preventDefault();
        setProcess(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    toast.success("you successfully created an account");
    setProcess(false)
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
               <h4>Sign Up</h4>
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
                   <div className="form-group my-4">
                       {!process ?<button className="btn btn-sm btn-info" onClick={SignUp}>Create account</button>:<button className="btn btn-info" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  saving...
</button>}
                   </div>
                   <p>Already have an account <Link href="/login"><a>Sign In</a></Link></p>
               </form>
           </div>
           </div>
           
       </div>
    </Authenticate>
    )
}

export default Createaccount
