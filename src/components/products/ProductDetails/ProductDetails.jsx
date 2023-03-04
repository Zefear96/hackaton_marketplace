import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import AddComment from "../AddComment/AddComment";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <div>
      {productDetails ? (
        <>
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
              image={productDetails.image}
              alt="error:("
              className="card-image"
            />
            <div className="content-block">
              <CardHeader
                className="card-title"
                title={productDetails.name}
                subheader={`category: ${productDetails.category}`}
                style={{ fontWeight: "bold !important" }}
              />

              <CardContent className="card-text" style={{ height: "200px" }}>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontSize: "1.2rem" }}>
                    ${productDetails.price}
                  </span>
                  <p>Vol. {productDetails.volume}</p>
                  <p>Alc.{productDetails.alcohol_percentage}%</p>
                  <p>{productDetails.description}</p>
                </Typography>
              </CardContent>
              <CardActions className="btns-block-prod">
                {/* <Button
                  variant="outlined"
                  className="btns-prod"
                  id="btn-prod-comm"
                  // onClick={() => deleteProduct(item.id)}
                >
                  Show Comments
                </Button> */}
                <AddComment />
              </CardActions>
            </div>
          </Card>
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
