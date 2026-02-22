import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/productApi";


const Product = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProduct);
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
