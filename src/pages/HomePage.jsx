import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const HomePage = () => {

  // const {checkUserInUsers, getUsers} = useAuth();
  // const [favorites, setFavorites] = useState(null); //??
  // const [user, setUser] = useState('')

  const [favorites, setFavorites] = useState([]);
  const [favUser, setFavUser] = useState({});
  
  const getFavUser = async() => {
      let {data} = await axios('http://localhost:8000/users');
      console.log(data);

      let username = JSON.parse(localStorage.getItem('username'));
      console.log(username);
      let userObj = data.find((item) => item.username === username);
      console.log(userObj);
      setFavUser(userObj);
  };

  const check = () => {
    console.log(favUser);
  }

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

  return <div>HomePage
    <button onClick={getFavUser}>test </button>
    <button onClick={check}>click</button>
  </div>
};

export default HomePage;
