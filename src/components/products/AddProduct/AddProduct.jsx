import React from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alcohol from '../../../media/image/alcohol.png'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
  
  //styles 

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#111111',
      },
    },
  });

  return (
    
    <div >
    <div className="myapp" >
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className='main-add'
          sx={{
            marginTop: 0,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 5, bgcolor: '#111111', width: '50px', height: '50px', mb: 0 }}>
          <img src={alcohol} alt="" width='50px' height='50px'/>
          </Avatar>
          <Typography component="h1" variant="h5" color='#ffffff'>
            Add Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Title"
                  name="name" onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="volume"
                  label="Volume"
                  name="volume"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="alcohol_percentage"
                  label="Alcohol Percentage"
                  name="alcohol_percentage"
                  onChange={handleInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Image URL"
                  name="image"
                  onChange={handleInp}
                />
              </Grid>

            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                addProduct(product);
                navigate("/products");
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
        </ThemeProvider>
      </div>
      
    </div>
   
  );

};

export default AddProduct;
