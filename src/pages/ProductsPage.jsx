import React, { useState } from "react";
import ProductList from "../components/products/ProductsList/ProductsList";
import ProductSideBar from "../components/products/ProductSideBar/ProductSideBar";

const ProductsPage = () => {

  const [isSideBar, setIsSideBar] = useState(true);
  const [page, setPage] = useState(1);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar)
  };

  return <>
  <ProductList changeSideBarStatus={changeSideBarStatus} page={page} setPage={setPage}/>
  <ProductSideBar isSideBar={isSideBar} setPage={setPage}/>
  </>;
};

export default ProductsPage;
