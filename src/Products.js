import React from "react";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "./Context";
const Products = () => {
  const { product } = useGlobalContext();

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
