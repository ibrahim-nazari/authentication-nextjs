import React from 'react'
import Authenticate from './components/Authenticate'
import Link from "next/link"

const login = () => {
    return (
        <Authenticate>
       <div className="container mt-3  ">
           <div className="d-flex justify-content-center flex-column align-items-center">
               <h4>Sign In</h4>
           <div>
               <form>
                   <div className="form-group">
                       <label>Email</label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group mt-2">
                       <label>Password</label>
                       <input type="password" className="form-control" />
                   </div>
                   <div className="form-group my-4">
                       <button className="btn btn-sm btn-info">Login</button>
                   </div>
                   <p>Don't have account <Link href="/createaccount"><a>Sign Up</a></Link></p>
               </form>
           </div>
           </div>
           
       </div>
    </Authenticate>
    )
}

export default login

