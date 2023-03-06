import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/HomePage.css";

const HomePage = () => {
  // const {checkUserInUsers, getUsers} = useAuth();
  // const [favorites, setFavorites] = useState(null); //??
  // const [user, setUser] = useState('')

  const [favorites, setFavorites] = useState([]);
  const [favUser, setFavUser] = useState({});

  const getFavUser = async () => {
    let { data } = await axios("http://localhost:8000/users");
    console.log(data);

    let username = JSON.parse(localStorage.getItem("username"));
    console.log(username);
    let userObj = data.find((item) => item.username === username);
    console.log(userObj);
    setFavUser(userObj);
  };

  const check = () => {
    console.log(favUser);
  };

  return (
    <div className="home-page">
      <div className="header">
        <video id="background-video" loop autoPlay muted>
          <source
            src="https://static-prod.remymartin.com/app/uploads/2021/05/slider-order-remy-martin-at-home-1280x720-720-02-cropped.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="promo-block">
        <div className="promo-video">
          <video loop autoPlay muted>
            <source
              src="https://www.glenfiddich.com/gf_s3_assets/gf_drupal_assets/videos/GLEN_Website_PDP-Video-15YO_Home.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="promo-center">
          <img
            src="https://www.glenfiddich.com/sites/default/files/2022-04/15yo-single-malt-scotch-whisky.png"
            alt=":("
          />
        </div>
        <div className="promo-text">
          <h2>DRINK WELL. DO GOOD.</h2>
          <p>
            Welcome to our online store for premium alcoholic beverages! Indulge
            yourself in our wide selection of top-quality wines, spirits, and
            liqueurs from all around the world. From the finest single malt
            scotch to the rarest vintage champagne, we have everything you need
            to elevate your drinking experience. Our expertly curated collection
            includes exclusive and hard-to-find bottles that will satisfy even
            the most discerning palate. We pride ourselves on providing
            exceptional customer service, ensuring that your shopping experience
            is easy and enjoyable.
          </p>
        </div>
      </div>

      <div className="about">
        <video loop autoPlay muted>
          <source
            src="https://www.glenfiddich.com/gf_s3_assets/gf_drupal_assets/videos/1-GLE-header-visit-the-distillery_1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="about-text">
          <h2>WELCOME TO OUR HOME</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
