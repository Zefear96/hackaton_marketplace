import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { getProductDetails, productDetails} = useProducts();
  const { id } = useParams()
  
  useEffect(() => {
    getProductDetails(id)
  }, []);

  return (
    <div>
      {productDetails ? (<>
        <h3>{productDetails.name}</h3>
        <h3>{productDetails.description}</h3>
        <h3>{productDetails.price}</h3>
        <img src={productDetails.image} alt="error:(" width="250" height="250"/>
      </>) : (
      <><h1>Loading</h1></>
      )}
    </div>)
};

export default ProductDetails;
