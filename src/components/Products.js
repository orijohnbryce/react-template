import React, { useEffect, useState } from "react";
import { deleteAllProducts, getAllProducts } from "../client/product-client";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  function reload() {
      getAllProducts().then((resProducts) => {
        console.log(resProducts);
      setProducts(resProducts);
    });
  }

  function handleDelete() {
    deleteAllProducts().then(() => {
      reload();
    });
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleDelete}> DELETE ALL </button>
      </div>

      {products.map((p) => {
        return <Product key={p.id} p={p} />;
      })}
    </div>
  );
};

export default Products;
