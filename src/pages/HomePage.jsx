import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const HomePage = () => {

  const {checkUserInUsers, getUsers} = useAuth();
  const [favorites, setFavorites] = useState(null); //??
  const [user, setUser] = useState('')

  //useEffect при загрузке страницы нужен будет

  useEffect(() => {
    getUsers();
  }, []);

  const getFavorites = () => {

    let username = JSON.parse(localStorage.getItem('username'));
    let userObj = checkUserInUsers(username); //вернет объект юзера
    console.log(userObj);
    setUser(userObj);

    setFavorites(userObj.favorites);
    console.log(userObj.favorites);

    return userObj.favorites

  };

  return <div>HomePage
    <button onClick={getFavorites}>test </button>
  </div>;
};

export default HomePage;
