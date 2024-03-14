import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetching } from "../redux/productActions";
import axios from "axios";

function Products() {
  const data = useSelector((state) => state.);

  const dispatch = useDispatch();
  const hundleDelete = (prod) => {
    axios
      .delete(`http://localhost:3000/products/${prod.id}`)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
    dispatch(deleteProduct(prod));
  };
  console.log(data);
  return (
    <div>
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>edit</th>
          <th>delete</th>
        </tr>

        {data &&
          data.map((prod) => {
            return (
              <tr>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`/products/${prod.id}`}>
                    <button>edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => hundleDelete(prod)}>delete</button>
                </td>
              </tr>
            );
          })}
      </table>
      <Link to={"/addproduct"}>
        {" "}
        <button>add product</button>
      </Link>
    </div>
  );
}

export default Products;
