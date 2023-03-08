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
import "../../../styles/ProductDetails.css";

const AddComment = () => {
  const { addComments, productDetails } = useProducts();

  const [product, setProduct] = useState(productDetails);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const username = JSON.parse(localStorage.getItem("username"));
  // console.log(username);

  const { id } = useParams();

  useEffect(() => {
    setUser(username);
  }, []);

  function saveComment() {
    if (comment.descr === undefined || comment.descr === "") {
      alert("Your input is empty");
      return;
    }

    addComments(comment, id, product);
    setComment({ descr: "" });
  }

  const [auth, setAuth] = useState("");

  function checkUserInSystem() {
    const userInSystem = JSON.parse(localStorage.getItem("username"));
    if (userInSystem) {
      return setAuth(true);
    } else return setAuth(false);
  }

  useEffect(() => {
    checkUserInSystem();
  });

  // MUI
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="comments-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Comments</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {auth ? (
            <>
              <TextField
                id="filled-basic"
                label="Comments..."
                variant="filled"
                name="comments"
                onChange={(e) =>
                  setComment({
                    author: user,
                    descr: e.target.value,
                    date: new Date().toLocaleString("ru-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  })
                }
                value={comment.descr}
              />

              <Button
                onClick={saveComment}
                variant="contained"
                id="btn-comments"
              >
                Save
              </Button>
            </>
          ) : (
            ""
          )}

          <Typography>
            {productDetails.comments ? (
              productDetails.comments.map((item) => (
                <div
                  style={{ borderBottom: "1px solid gainsboro" }}
                  key={item.id}
                >
                  <div className="header-comment">
                    <h4 style={{ fontWeight: "bold" }}>{item.author}</h4>
                    <h4 id="date">{item.date}</h4>
                  </div>
                  <p>{item.descr}</p>
                </div>
              ))
            ) : (
              <p>"Not yet comments, be the first!"</p>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddComment;
