import React from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    volume: "",
    alcohol_percentage: "",

  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else if (e.target.name === "volume") {
      let obj = {
        ...product,
        volume: Number(e.target.value),
      };
      setProduct(obj);
    } else if (e.target.name === "alcohol_percentage") {
      let obj = {
        ...product,
        alcohol_percentage: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  return (
    <div className="myapp">

      <input type="text" placeholder="name" name="name" onChange={handleInp} />
      <input
        type="text"
        placeholder="category"
        name="category"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="volume"
        name="volume"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="alcohol percentage"
        name="alcohol_percentage"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="image"
        name="image"
        onChange={handleInp}
      />
      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Add Product
      </button>
    </div>
  );

};

export default AddProduct;
