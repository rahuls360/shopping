import React from "react";
import products from "../products";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Products</h1>
        {products.map((product, index) => {
          return <Product product={product} key={index} index={index} />;
        })}
      </>
    );
  }
}

export default Products;
