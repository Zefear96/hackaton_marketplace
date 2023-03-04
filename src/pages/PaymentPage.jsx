import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { useOrder } from "../contexts/OrderContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";

const PaymentPage = () => {
  const { getCart, cart } = useCart();
  const { addOrder } = useOrder();
  const navigate = useNavigate();

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

  const [open, setOpen] = useState(false);

  <></>;

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
        <Button
          variant="contained"
          disabled={open}
          onClick={() => {
            addOrder(order);
            setOpen(true);
            setTimeout(() => navigate("/"), 4000);
          }}
        >
          SAVE
        </Button>
      </div>

      <Collapse in={open}>
        <div
          className="card"
          style={{
            borderRadius: "200px",
            background: "#F8FAF5",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </Collapse>
    </>
  );
};

export default PaymentPage;
