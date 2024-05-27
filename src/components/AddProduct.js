import React, { useState } from "react";
import { addProduct } from "../client/product-client";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  function handleClick() {
    addProduct({
      name,
      price,
      stock,
      imageUrl: image,
    });
  }

  return (
    <div>
      <p>Add Product</p>
      <label> product-name: </label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label> price: </label>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <label> in-stock: </label>
      <input
        type="number"
        value={stock}
        onChange={(e) => {
          setStock(e.target.value);
        }}
      />
      <br />
      <label> image-url: </label>
      <input
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <br />
      <button onClick={handleClick}> Click here </button>
    </div>
  );
};

export default AddProduct;
