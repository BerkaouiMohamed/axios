import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products({products , setProducts}) {
    
    console.log(products);
useEffect(()=>{
axios.get('http://localhost:3000/products',)
.then((res)=>setProducts(res.data))
},[])
  return (
    <div>
<table>
    <tr>
        <th>product</th>
        <th>price</th>
        <th>edit</th>
    </tr>
    {products.map((p)=>{
        return<tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.price}</td>
         <Link to={`/edit/${p.id}`} >   <td><button>edit</button></td> </Link>
        </tr>
    })}


</table>
    </div>
  )
}

export default Products
