import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import AddComment from "../AddComment/AddComment";
import "../../../styles/ProductDetails.css";
import { useCart } from "../../../contexts/CartContextProvider";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams();
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFav } = useFavorites();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  // MOTION
  // state for scroll visible
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: -250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const variantsBottom = {
    hidden: {
      opacity: 0,
      y: 250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      {productDetails ? (
        <div className="prod-card-container">
          <div className="image-block" ref={ref}>
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="image"
            >
              <img src={productDetails.image} alt="" />
            </motion.div>
          </div>

          <div className="info-block-details" ref={ref}>
            <motion.div
              variants={variantsBottom}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="desc-prod"
            >
              VOLUME : {productDetails.volume}L | ABV :
              {productDetails.alcohol_percentage}%<h1>{productDetails.name}</h1>
              <h3 id="price">${productDetails.price}</h3>
              <div className="desc-btn">
                <Button
                  variant="contained"
                  onClick={() => addProductToCart(productDetails)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={() => addProductToFav(productDetails, id)}
                >
                  Add to Wish List
                </Button>
              </div>
              <h4>Description</h4>
              <div className="desc-text">
                <p>{productDetails.description}</p>
              </div>
              <AddComment />
            </motion.div>
          </div>
        </div>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
