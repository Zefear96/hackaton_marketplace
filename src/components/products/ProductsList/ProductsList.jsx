import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "../../../styles/ProductsList.css";

const ProductsList = ({changeSideBarStatus}) => {
  const { products, getProducts } = useProducts();

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <button onClick={changeSideBarStatus}>Filter&Search Menu</button>
    <div className="container-prods">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
    </>
  );
};

export default ProductsList;
