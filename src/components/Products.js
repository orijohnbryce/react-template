import React, { useEffect, useState } from "react";
import { getAllProducts } from "../client/product-client";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  function load() {
    getAllProducts().then((resProducts) => {
      setProducts(resProducts);
    });
  }
 

  useEffect(() => {
    load();
  }, []);

  return (
    <div>    
      {products.map((p) => {
        return <Product key={p.id} p={p} />;
      })}
    </div>
  );
};

export default Products;
