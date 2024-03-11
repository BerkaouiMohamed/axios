import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home({products , setProducts}) {

useEffect(()=>{
axios.get('http://localhost:3000/products',)
.then((res)=>console.log(res))
},[])
  return (
    <div>
      home
    </div>
  )
}

export default Home
