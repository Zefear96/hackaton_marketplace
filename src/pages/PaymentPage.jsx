import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { useOrder } from "../contexts/OrderContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css";
import mastercard from '../media/image/mastercard.png';

import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';


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

  //styles
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#bc9366',
      },
    },
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <ThemeProvider theme={theme}>

    <div className="page">
      <div className="container">
        <h1>Checkout</h1>
        <div className="delivery">
          <hr />
          <img src="" alt="" />
          <h6>DELIVERY</h6>
          <h6>
            <b>Shipping</b> 
          </h6>
          <hr />
        </div>
        <div className="info">
          <h5>Enter details to receive your purchases</h5>
          
          <div className="user-data">
          <TextField label="YOUR FIRST NAME *" variant="standard" name="firstName" onChange={handleInp}         className="user-inp"/>
          <TextField label="YOUR LAST NAME *" variant="standard" onChange={handleInp} className="user-inp" name="lastName"/>
          <div className='address-inp'>
          <TextField label="YOUR DELIVERY ADDRESS" variant="standard" onChange={handleInp} name="address" className='address-inp'/>
          </div>
          <TextField label="YOUR EMAIL ADDRESS *" variant="standard" onChange={handleInp}  name="email" className="user-inp"/>
          <TextField label="YOUR PHONE *" variant="standard" onChange={handleInp} className="user-inp" name="phone"/>

          </div>
          
          <p id="check-inp"><Checkbox {...label} defaultChecked color="default" />
  By signing up, you agree to accept our terms and conditions and our privacy and cookie policies. *</p>
  
          <p id="man-inp">*Mandatory fields</p>  

          <div className="payments-block">
              <CardMedia
                sx={{ height: 150, width: 250 }}
                image="https://cashback-karta.ru/wp-content/uploads/2019/09/debet_card_tinkoff_black.png"
              />
              <CardMedia
                // sx={{ height: 175, width: 275 }}
                className='card-img'
                image="https://i.ibb.co/PjYLm1g/signature-800x450-removebg-preview-1.png"
              />
              <CardMedia
                // sx={{ height: 175, width: 275 }}
                className='card-img'
                image={mastercard}
              />
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
          <div >
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </Collapse>
    </div>
    </ThemeProvider>

  );
};

export default PaymentPage;
