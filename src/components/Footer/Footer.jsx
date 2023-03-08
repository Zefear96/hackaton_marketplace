import * as React from "react";
import "../../styles/Footer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Twitter } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function StickyFooter() {
  return (
    <Box
    position='static'
      className="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <Box
        component="footer"
        className="container"
        sx={{
          py: 3,
          px: 2,
          mt: "0",
        }}
      >
        <Container
          maxWidth="sm"
          className="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="footer__logo">
            <img
              className="logo_img"
              src="https://www.glenfiddich.com/themes/custom/gf_theme/images/logo_white.svg"
              alt="Logo"
            />
          </div>
          <div className="footer__family">
            <h3 textalign="center" color="white" className="title__family">
              OUR FAMILY
            </h3>
            <ul className="family__list">
              <li>
                <a href="#">Alybek Co</a>
              </li>
              <li>
                <a href="#" id="rehab" >
                  Rehab
                </a>
              </li>
              <li>
                <a href="#">Aigerim Watches</a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <ul className="social__list">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <YouTubeIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__disclaimer">
            <Typography
              color="white"
              style={{ fontSize: "11px" }}
              className="title__disclaimer"
            >
              ©2023 Monarch & CO
              <br />
              Please drink responsibly
            </Typography>
          </div>
          <div className="footer__nav">
            <ul className="nav__list">
              <li>
                <a href="#">TERMS AND CONDITIONS</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#">COOKIE POLICY</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
