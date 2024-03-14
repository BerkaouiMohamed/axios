import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex", gap:"30px"}}>
       <Link to={"/"}> <p>home</p></Link>
      <Link to={"/products"}> <p>products</p></Link> 
       <Link to={'/cake'}> <p>cake</p></Link>
    </div>
  )
}

export default Navbar
