import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/HomePage.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  // MOTION

  // state for scroll visible
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const { ref2, inView2 } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const variants2 = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const variants3 = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const variantsCenter = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="home-page">
      <video id="background-video" loop autoPlay muted>
        <source
          src="https://static-prod.remymartin.com/app/uploads/2021/05/slider-order-remy-martin-at-home-1280x720-720-02-cropped.mp4"
          type="video/mp4"
        />
      </video>

      <div ref={ref}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="title-text"
        >
          <h4>Monarch</h4>
          <h1>Welcome to our online store for premium alcoholic beverages!</h1>
          <p>
            Take advantage of our convenient online ordering and delivery
            service, and have your favourite drinks delivered straight to your
            door. We offer fast and reliable shipping, so you can enjoy your
            premium beverages in no time.
          </p>
        </motion.div>
      </div>

      <div className="header-block" ref={ref}>
        <motion.div
          variants={variants2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="card-header"
          id="card-left"
        >
          <img
            src="https://static-prod.remymartin.com/app/uploads/2022/04/collaboration-with-chef-matthew-kammerer-s-04-458x600.jpg"
            alt=""
          />
          <div className="card-header-text">
            <div className="card-descr">
              <h4>Collaboration with the Michelin Guide</h4>
              Every month, Rémy&nbsp;Martin and a Michelin Green-Starred chef
              will reveal an exclusive, seasonal recipe to pair with cognac.
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={variants3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="card-header"
          id="card-center"
        >
          <img
            src="https://static-prod.remymartin.com/app/uploads/2022/06/chef-arabelle-meirlaen-portrait-01-400x600.jpg"
            alt=""
          />
          <div className="card-header-text">
            <div className="card-descr">
              <h4>Collaboration with chef Arabelle Meirlaen</h4>
              Chef Arabelle Meirlaen shares a recipe for white mechelen
              asparagus with bear garlic and egg yolk confit to be paired with
              Rémy Martin XO.
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={variants2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="card-header"
          id="card-right"
        >
          <img
            src="https://static-prod.remymartin.com/app/uploads/2020/08/teaser-l2-our-commitment-the-vine-01-461x600.jpg"
            alt=""
          />
          <div className="card-header-text">
            <div className="card-descr">
              <h4>WE ARE ROOTED IN SUSTAINABILITY </h4>
              Take a closer look at the steps on our path towards
              sustainability.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about" ref={ref2}>
        <video loop autoPlay muted>
          <source
            src="https://www.glenfiddich.com/gf_s3_assets/gf_drupal_assets/videos/1-GLE-header-visit-the-distillery_1.mp4"
            type="video/mp4"
          />
        </video>
        <motion.div
          className="about-text"
          variants={variantsCenter}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2>WELCOME TO OUR HOME</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
