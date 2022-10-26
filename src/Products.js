import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const Products = () => {
  const [product, setProduct] = useState([]);
  const url = "https://api.spacexdata.com/v3/launches/";

  const fetchData = async () => {
    const response = await fetch(url);

    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {product.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
