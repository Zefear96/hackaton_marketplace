import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { useOrder } from "../contexts/OrderContextProvider";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PaymentPage = () => {
  const { getCart, cart } = useCart();
  const { addOrder } = useOrder();

  useEffect(() => {
    getCart();
  }, []);

  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    products: cart.products,
    totalPrice: cart.totalPrice,
  });

  const handleInp = (e) => {
    let obj = {
      ...order,
      [e.target.name]: e.target.value,
    };
    setOrder(obj);
  };

  return (
    <>
      <div className="container">
        <h1>Checkout</h1>
        <div className="delivery">
          <hr />
          <img src="" alt="" />
          <h6>DELIVERY</h6>
          <h6>
            <b>Shipping</b> Liquor Barn
          </h6>
          <hr />
        </div>
        <div className="Address">
          <h5>ADDRESS</h5>
          
          <div className="user-data">
            <TextField
              id="filled-basic"
              placeholder="First Name"
              variant="filled"
              onChange={handleInp}
              name="firstName"
            />
            <TextField
              id="filled-basic"
              placeholder="Last Name"
              variant="filled"
              onChange={handleInp}
              name="lastName"
            />
          </div>

          <TextField
            id="filled-basic"
            placeholder="Enter address"
            variant="filled"
            onChange={handleInp}
            name="address"
          />

          <div className="user-contacts">
            <TextField
              id="filled-basic"
              placeholder="Your email"
              variant="filled"
              onChange={handleInp}
              name="email"
            />
            <TextField
              id="filled-basic"
              placeholder="Your phone"
              variant="filled"
              onChange={handleInp}
              name="phone"
            />
          </div>

          <div className="payments-block">
            <Card sx={{ width: 250 }}>
              <CardMedia
                sx={{ height: 150 }}
                image="https://cashback-karta.ru/wp-content/uploads/2019/09/debet_card_tinkoff_black.png"
              />
              <CardMedia
                sx={{ height: 150 }}
                image="https://pngimg.com/d/credit_card_PNG23.png"
              />
            </Card>
          </div>
          
        </div>
      
        <Button variant="contained" onClick={() => addOrder(order)}>
          SAVE
        </Button>
      </div>
    </>
  );
};

export default PaymentPage;
