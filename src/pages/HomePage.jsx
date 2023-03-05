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

  //useEffect при загрузке страницы нужен будет

  // const getFavorites = () => {

  //   let username = JSON.parse(localStorage.getItem('username'));
  //   let userObj = checkUserInUsers(username); //вернет объект юзера
  //   console.log(userObj);
  //   setUser(userObj);

  //   setFavorites(userObj.favorites);
  //   console.log(userObj.favorites);

  //   return userObj.favorites

  // };

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
      <div className="promo">
        <video loop autoPlay muted>
          <source
            src="https://www.glenfiddich.com/gf_s3_assets/gf_drupal_assets/videos/GLEN_Website_PDP-Video-15YO_Home.mp4"
            type="video/mp4"
          />
        </video>
        <div className="promo-text">
          <h1>Lorem ipsum dolor sit amet.</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dicta voluptas obcaecati! Consequatur et dolores, quam
          totam natus voluptatem commodi obcaecati repellat, nisi quisquam, quae
          dicta? Recusandae fugit iusto repudiandae.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
