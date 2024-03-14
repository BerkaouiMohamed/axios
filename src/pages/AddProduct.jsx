import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const title = useRef();
  const price = useRef();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const hundleAdd = () => {
    axios
      .post("http://localhost:3000/products", {
        title: title.current.value,
        price: price.current.value,
      })
      .then((res) => console.log(res));
    dispatch(
      addProduct({ title: title.current.value, price: price.current.value })

    );
navigate('/products')
  };
  return (
    <div>
      <input type="text" ref={title} />
      <input type="number" ref={price} />
      <button onClick={hundleAdd}>submit</button>
    </div>
  );
}

export default AddProduct;
