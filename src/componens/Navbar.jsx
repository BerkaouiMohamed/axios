import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <ul>
           <Link to={'/'}> <li>home</li></Link>
           <Link to={'/products'}> <li>products</li></Link>

            
           
        </ul>
      
    </div>
  )
}

export default Navbar
