import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../redux/productActions";
import { useParams } from "react-router-dom";

function EditProduct() {
  const title = useRef();
  const price = useRef();
  const {id}=useParams()
  const dispatch = useDispatch();
  const hundleEdit = () => {
    dispatch(editProduct({ id,title:title.current.value, price:price.current.value }));
  };

  return (
    <div>
      <input type="text" ref={title} />
      <input type="number" ref={price} />
      <button onClick={hundleEdit}>submit</button>
      <br/>
    </div>
  );
}

export default EditProduct;