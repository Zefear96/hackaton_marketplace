import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
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
    <>
    {product ? (<>
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
            Edit Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Title"
                  name="name" onChange={handleInp} value={product.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category" onChange={handleInp} value={product.category}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description" onChange={handleInp} value={product.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price2"
                  label="Price"
                  name="price" onChange={handleInp} value={product.price}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="volume"
                  label="Volume"
                  name="volume" onChange={handleInp} value={product.volume}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="alcohol_percentage"
                  label="Alcohol Percentage"
                  name="alcohol_percentage" onChange={handleInp} value={product.alcohol_percentage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Image URL"
                  name="image" onChange={handleInp} value={product.image}
                />
              </Grid>

            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                saveEditedProduct(product)
                navigate('/products')
              }}
            >
              Save changes
            </Button>
          </Box>
        </Box>
        </ThemeProvider>
    </>) : (<></>)}

    </>
  )
};

export default EditProduct;

// {product ? (<>
//   <h1>Edit Product</h1>
//   <input type="text" placeholder="name" name="name" onChange={handleInp} value={product.name}/>
//   <input type="text" placeholder="category" name="category" onChange={handleInp} value={product.category}/>
//   <input type="text" placeholder="price" name="price" onChange={handleInp} value={product.price}/>
//   <input type="text" placeholder="description" name="description" onChange={handleInp} value={product.description}/>
//   <input type="text" placeholder="volume" name="volume" onChange={handleInp} value={product.volume}/>
//   <input type="text" placeholder="alcohol percentage" name="alcohol_percentage" onChange={handleInp} value={product.alcohol_percentage}/>
//   <input type="text" placeholder="image" name="image" onChange={handleInp} value={product.image}/>
//   <button onClick={() => {
//     saveEditedProduct(product)
//     navigate('/products')
//   }}>Save Changes</button>
// </>) : (
// <></>
// )}
