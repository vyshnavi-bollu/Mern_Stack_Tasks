import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;