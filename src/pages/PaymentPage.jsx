import React from "react";
import PaymentProduct from "../components/products/PaymentProduct/PaymentProduct";

const PaymentPage = () => {
  return <>
  <div className="container">
    <h1>Checkout</h1>
    <div className="delivery">
      <hr />
      <img src="" alt="" />
      <h6>DELIVERY</h6>
      <h6><b>Shipping</b>   Liquor Barn</h6>
      <hr />
    </div>
    <div className="Address">
      <h5>ADDRESS</h5>
      <div className="main_block">
        <span>Your Details</span>
        Residential 
        Business 
        First Name
        Last Name
        Address, City, State, ZIP
        Your Email
        I agree to receive order updates. View Terms&Policy
        Your Birth Date
        Month 
        Year 
        Date
        Send As Gift? (Free)
        Save
        
      </div>
      
    </div>


  </div>
  
  <PaymentProduct />
  </>;
};

export default PaymentPage;
