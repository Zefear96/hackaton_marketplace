import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "../../../styles/ProductsList.css";

import { Pagination } from "@mui/material";

const ProductsList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 6;
  const count = Math.ceil(products.length / itemsOnPage); //pages

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <button onClick={changeSideBarStatus}>Filter&Search Menu</button>
      <div className="container-prods">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        id="pagination"
        color="warning"
      />
    </div>
  );
};

export default ProductsList;
