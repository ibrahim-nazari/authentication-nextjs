import React from 'react'
import Header from "./Header"
const Authenticate = ({children}) => {
    return (
        <div>
            <Header/>
          {children}  
        </div>
    )
}

export default Authenticate
