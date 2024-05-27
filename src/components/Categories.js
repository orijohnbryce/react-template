import React, { useEffect, useState } from "react";
import { getCategories } from "../client/categories-client";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      if (res) {
        setCategories(res);
      }
    });
  }, []);
  return (
    <div>
      {categories.map((c) => {
        console.log(c);
        return (
          <div key={c.id}>
            <p>{c.name}</p>
            <p>{c.description}</p>
            <img style={{maxWidth: '100px'}} src={c.imageUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
