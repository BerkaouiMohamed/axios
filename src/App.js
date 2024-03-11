import React, { useState } from 'react'
import Navbar from './componens/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './componens/Home'
import Products from './componens/Products'
import Edit from './Edit'

function App() {
  const [products,setProducts]=useState([])
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home  products={products} setProducts={setProducts} />} />
        <Route path='/products' element={<Products products={products} setProducts={setProducts} />} />
        <Route path='/edit/:id' element={<Edit  products={products} setProducts={setProducts}  />} />
      </Routes>
      
    
    </div>
  )
}

export default App
