import React from 'react'
import Link from "next/link"
import firebase from "../../firebaseClient"
import { useContextHook } from '../store'
const Header = () => {
  const {state:{user}} =useContextHook();

  function signOut() {
    
    firebase.auth().signOut();
    
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
          <a className="navbar-brand" >BigBlog</a>
          </Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link href="/addnewpost">
                    <a className="nav-link">Add new post </a>
                </Link>
              
            </li>
            
           
          </ul>
          
        </div><button className="btn btn-default">{user &&user.displayName}</button>
          {user?(<button onClick={signOut} className="btn btn-outline-info">Sign Out</button>):(<Link href="/login"><a className="btn btn-outline-info">Login</a></Link>)}
          
          
        </div>
      </nav>
    )
}

export default Header
