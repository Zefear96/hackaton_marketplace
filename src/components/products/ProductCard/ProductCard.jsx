import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
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
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import "../../../styles/ProductCard.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteProduct } = useProducts();

  const { addProductToCart, checkProductInCart } = useCart();

  const {
    addProductToFav,
    checkProductInFav,
    getFavUser,
    favUser,
    getFavorites,
  } = useFavorites();

  // const [userObj, setUserObj] = useState(favUser);

  useEffect(() => {
    getFavUser();
  }, []);

  useEffect(() => {
    getFavorites();
  }, []);

  // MUI
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="card-prod">
      <div
        style={{
          marginBottom: "0",
          paddingBottom: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center ",
          alignItems: "end ",
        }}
      >
        <IconButton aria-label="settings" onClick={handleMenuClick}>
          <MoreVertIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate(`/edit/${item.id}`)}>
            Edit <SettingsSuggestIcon fontSize="small" color="warning" />
          </MenuItem>
          <MenuItem onClick={() => deleteProduct(item.id)}>
            Delete <DeleteIcon fontSize="small" color="error" />
          </MenuItem>
        </Menu>
      </div>

      <CardMedia
        component="img"
        image={item.image}
        alt="error:("
        className="card-image"
        onClick={() => navigate(`/details/${item.id}`)}
      />

      <div className="content-block">
        <CardHeader
          className="card-title"
          title={item.name}
          subheader={`VOLUME : ${item.volume}L | ABV : ${item.alcohol_percentage}%`}
          style={{ fontWeight: "bold !important" }}
          onClick={() => navigate(`/details/${item.id}`)}
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
              onClick={() => addProductToFav(item, favUser.id)}
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
            {/* <Button
              variant="outlined"
              className="btns-prod"
              id="btn-prod-details"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              More
              <ContactSupportIcon fontSize="small" />
            </Button> */}
            {/* <Button
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
            </Button> */}
          </div>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
