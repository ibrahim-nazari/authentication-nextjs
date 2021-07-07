import React from 'react'
import Link from "next/link"
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
          <a class="navbar-brand" >BigBlog</a>
          </Link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link href="/addnewpost">
                    <a class="nav-link">Add new post </a>
                </Link>
              
            </li>
            
           
          </ul>
          
        </div><Link href="/login">
          <a className="btn btn-outlined-info">Login</a></Link>
        </div>
      </nav>
    )
}

export default Header
