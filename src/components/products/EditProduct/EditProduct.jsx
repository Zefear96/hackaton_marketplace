import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const EditProduct = () => {
  const {getProductDetails, productDetails, saveEditedProduct} = useProducts();
  const [product, setProduct] = useState(productDetails);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id)
  }, []);

  useEffect(() => {
    setProduct(productDetails)
  }, [productDetails, ]);

  const handleInp = (e) => {
    if(e.target.name === 'price') {
      let obj = {
        ...product,
        price: Number(e.target.value)
      };
      setProduct(obj);
    } else if (e.target.name === 'volume') {
      let obj = {
        ...product,
        volume: Number(e.target.value)
      }
      setProduct(obj)
    } else if (e.target.name === 'alcohol_percentage') {
      let obj = {
        ...product,
        alcohol_percentage: Number(e.target.value)
      }
      setProduct(obj)
    }
     else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value
      };
      setProduct(obj)
    }
  };

  return (
    <>
    {product ? (<>
      <h1>Edit Product</h1>
      <input type="text" placeholder="name" name="name" onChange={handleInp} value={product.name}/>
      <input type="text" placeholder="category" name="category" onChange={handleInp} value={product.category}/>
      <input type="text" placeholder="price" name="price" onChange={handleInp} value={product.price}/>
      <input type="text" placeholder="description" name="description" onChange={handleInp} value={product.description}/>
      <input type="text" placeholder="volume" name="volume" onChange={handleInp} value={product.volume}/>
      <input type="text" placeholder="alcohol percentage" name="alcohol_percentage" onChange={handleInp} value={product.alcohol_percentage}/>
      <input type="text" placeholder="image" name="image" onChange={handleInp} value={product.image}/>
      <button onClick={() => {
        saveEditedProduct(product)
        navigate('/products')
      }}>Save Changes</button>
    </>) : (
    <></>
    )}
    </>
  )
};

export default EditProduct;
