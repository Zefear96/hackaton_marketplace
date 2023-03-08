import React, {useEffect, useState} from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useNavigate } from "react-router-dom";
import { useProducts } from '../../contexts/ProductContextProvider';
import { useCart } from '../../contexts/CartContextProvider';
import '../../styles/Favorites.css'

//mui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Favorites = () => {
    const {deleteProdFromFav, favCleaner, favorites, favUser, getFavUser, getFavorites, checkProductInFav} = useFavorites();

    useEffect(() => {
      getFavUser();
    }, []);

    useEffect(() => {
      getFavorites()
    }, []);

    const navigate = useNavigate();
    const { deleteProduct } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart();
    // style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px 0px'}}
    // style={{display: 'flex', flexWrap: 'wrap', width: '70%', justifyContent: 'center', margin: 'auto' }}
  return (
    <div className='products-list'>
      <div className="container-prods">
       
        {favorites.length !== 0 ? (favorites?.map(item => (
              <Card className="card-prod" key={item.id}> 
              <div
                style={{
                  marginBottom: "0",
                  paddingBottom: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center ",
                  alignItems: "end",
                }}
              >
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </div>
        
              <CardMedia
                component="img"
                image={item.image}
                alt="error:("
                className="card-image"
              />
              <div className="content-block">
                <CardHeader
                  className="card-title"
                  title={item.name}
                  subheader={`VOLUME : ${item.volume}L | ABV : ${item.alcohol_percentage}%`}
                  style={{ fontWeight: "bold !important" }}
                />
        
                <CardContent className="card-text">
                  <Typography variant="body2" color="text.secondary">
                    <br />
                    <span id="prodcard-price">${item.price}</span>
                  </Typography>
                </CardContent>
                <CardActions className="btns-block-prod">
                  <div className="btns-user">
                    <IconButton
                      size="small"
                      onClick={() => deleteProdFromFav(item.id, favUser.id)}
                    >
                      {checkProductInFav(item.id) ? (
                        <FavoriteIcon style={{ color: "#DC143C" }} />
                      ) : (
                        <FavoriteBorderIcon style={{ color: "white" }} />
                      )}
                    </IconButton>
        
                    <IconButton size="small" onClick={() => addProductToCart(item)}>
                      {checkProductInCart(item.id) ? (
                        <ShoppingCartIcon style={{ color: "white" }} />
                      ) : (
                        <AddShoppingCartOutlinedIcon style={{ color: "white" }} />
                      )}
                    </IconButton>
                  </div>
        
                  <div className="btns-admin">
                    <Button
                      variant="outlined"
                      className="btns-prod"
                      id="btn-prod-details"
                      onClick={() => navigate(`/details/${item.id}`)}
                    >
                      More
                      <ContactSupportIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      className="btns-prod"
                      id="btn-prod-edit"
                      onClick={() => navigate(`/edit/${item.id}`)}
                    >
                      Edit <SettingsSuggestIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      className="btns-prod"
                      id="btn-prod-delete"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete <DeleteIcon fontSize="small" />
                    </Button>
                  </div>
                </CardActions>
              </div>
            </Card>
            ))) : ( <div style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{fontSize: '30px', color: 'black', marginBottom: '20px'}}>Your Favorites List is empty!</h1>
            </div>)}
        
        <div style={{width: '70%'}}>
      <Button id='cleanFav-btn'
      variant="outlined" style={{width: '20%', margin: 'auto'}}
      onClick={() => favCleaner(favUser.id)}>
      Clean my favList <DeleteIcon fontSize="medium" style={{color: '#bf4545', marginLeft: '2px'}}/>
      </Button>
      </div>
      </div>
    </div>
  )
}

export default Favorites