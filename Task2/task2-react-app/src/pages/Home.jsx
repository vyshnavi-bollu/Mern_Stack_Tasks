import React from "react";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

function Home() {
  return (
    <div>
      <h1>Product Management App</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default Home;