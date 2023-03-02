import React, { useState } from "react";
import ProductsList from "../components/products/ProductsList/ProductsList";

const ProductsPage = () => {
  const [isSideBar, setIsSideBar] = useState(true);

  const [page, setPage] = useState(1);

  return (
    <div className="productsPage">
      <ProductsList page={page} setPage={setPage} />
    </div>
  );
};

export default ProductsPage;
