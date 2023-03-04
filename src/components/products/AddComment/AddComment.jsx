import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import React from "react";
import { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";

const AddComment = () => {
  const { addComments, productDetails } = useProducts();

  const [product, setProduct] = useState(productDetails);
  const [user, setUser] = useState();

  const username = localStorage.getItem("username");
  // console.log(username);

  useEffect(() => {
    setUser(username);
  }, []);

  const { id } = useParams();

  const handleInp = (e) => {
    // let objComment = {
    //   ...productDetails,
    //   comments: [
    //     {
    //       author: user,
    //       descr: e.target.value,
    //     },
    //   ],
    // };

    // let objComment = {
    //   ...productDetails,
    // };
    productDetails.comments.push({
      author: user,
      descr: e.target.value,
    });

    // console.log(objComment);

    setProduct(productDetails);
  };

  // MUI
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="filled-basic"
            label="Comments..."
            variant="filled"
            name="comments"
            onChange={handleInp}
          />

          <Button onClick={() => addComments(product, id)} variant="contained">
            Save
          </Button>

          <Typography>
            {productDetails.comments
              ? productDetails.comments.map((item) => (
                  <div style={{ borderBottom: "1px solid" }}>
                    <h3>{item.author}</h3>
                    <p>{item.descr}</p>
                  </div>
                ))
              : "Not yet comments, be the first! :)"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddComment;
