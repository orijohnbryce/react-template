import React, { useState } from "react";
import { deleteProduct } from "../client/product-client";

const DeleteProduct = () => {
  const [id, setId] = useState("");

  const handleClick = async () => {
    const res = await deleteProduct(id);
    res ? alert("Product deleted!") : alert("ERROR!");
  };

  return (
    <div>
      <br />
      <p> Enter product-id to delete: </p>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value || "");
        }}
      />
      <br />
      <button onClick={handleClick}> Delete </button>
    </div>
  );
};

export default DeleteProduct;
