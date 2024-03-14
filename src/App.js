import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Cake from "./pages/Cake";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { useDispatch } from "react-redux";
import { fetching } from "./redux/productActions";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetching())},[])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<EditProduct />} />

        <Route path="/cake" element={<Cake />} />
        <Route path="/addproduct" element={<AddProduct />} />

      </Routes>
    </div>
  );
}

export default App;
