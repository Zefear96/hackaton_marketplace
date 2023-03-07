import React from "react";
import AddProduct from "../components/products/AddProduct/AddProduct";
import '../styles/AdminPage.css'

const AdminPage = () => {
  return (
    <>
    <div className="main-block1">
    <AddProduct />
      <img src="https://tours.glenfiddich.com/storage/tourimages/nlhqHJEz3ed9U2Cgu548YwptJlWPPGbZMyAS6YvQ.jpeg" alt="error:(" id="bg-img" />
    </div>
    
    </>
  );

};

export default AdminPage;
