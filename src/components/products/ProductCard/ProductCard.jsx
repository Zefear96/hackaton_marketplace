import React from "react";
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

import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/ProductCard.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteProduct } = useProducts();

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
          subheader={`category: ${item.category}`}
          style={{ fontWeight: "bold !important" }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontSize: "1.2rem" }}>${item.price}</span>
            <p>Vol. {item.volume}</p>
            <p>Alc.{item.alcohol_percentage}%</p>
            <p>
              <b>Description:</b> {item.description.slice(0, 50) + "..."}
            </p>
          </Typography>
        </CardContent>
        <CardActions className="btns-block-prod">
          <Button
            variant="outlined"
            className="btns-prod"
            id="btn-prod-details"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            Details
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

          {/* <IconButton size="small" onClick={() => addProductToCart(item)}>
            <AddShoppingCartOutlinedIcon
              color={checkProductInCart(item.id) ? "success" : ""}
            />
          </IconButton> */}
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
