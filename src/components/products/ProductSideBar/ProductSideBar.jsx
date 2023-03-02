import React, { useState, useEffect } from "react";
import FilterProduct from '../FilterProduct/FilterProduct';
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductSideBar = ({isSideBar, page}) => {

  const { products, getProducts } = useProducts();


















  return isSideBar ? (
  <div className="sideBar">
    <input type="text" placeholder="Search"/>
    <FilterProduct />
  </div>
  ) : null;
};

export default ProductSideBar;
