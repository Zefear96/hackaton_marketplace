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
    <div className="products-list">
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

      <div className="promo-block">
        <div className="promo-video">
          <video loop autoPlay muted>
            <source
              src="https://www.glenfiddich.com/gf_s3_assets/gf_drupal_assets/videos/GLEN_Website_PDP-Video-15YO_Home.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="promo-center">
          <img
            src="https://www.glenfiddich.com/sites/default/files/2022-04/15yo-single-malt-scotch-whisky.png"
            alt=":("
          />
        </div>
        <div className="promo-text">
          <div className="descr">
            <h2>DRINK WELL. DO GOOD.</h2>
            <h3>
              Welcome to our online store for premium alcoholic beverages!
            </h3>
            <h3>15 YEAR OLD OUR SOLERA FIFTEEN</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
