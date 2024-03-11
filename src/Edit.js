import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [products,setProducts]=useState({})

  const navigate=useNavigate()
    const {id}=useParams()
   const hundleEdit=(e)=>{
    axios.put(`http://localhost:3000/products/${id}`,products)
    .then((res)=>console.log(res.data))
   }


   const hundleDelete=(e)=>{
    e.preventDefault()
    axios.delete(`http://localhost:3000/products/${id}`)
    .then((res)=>navigate(-1))
   }
    useEffect(()=>{
      axios.get(`http://localhost:3000/products/${id}`,)
      .then((res)=>setProducts(res.data))
      },[])
  return (
    <><div>
      <img src={products.image} style={{height:"300px", width:"300px"}}/>
    <form>
      <input type='text' value={products.title} onChange={(e)=>setProducts({...products,title:e.target.value})}/>
      <input type='number' value={products.price} onChange={(e)=>setProducts({...products,price:e.target.value})}/>
    <button onClick={hundleEdit}>edit</button>
    <button onClick={hundleDelete}>delete</button>

    </form>
     
  
    </div>
    
    </>
  )
}

export default Edit
