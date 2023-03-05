import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import { useAuth } from './AuthContextProvider';

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const API = 'http://localhost:8000/users';

const FavoritesContextProvider = ({children}) => {

  const [favorites, setFavorites] = useState([]);
  const [favUser, setFavUser] = useState({});
  
    const getFavUser = async() => {
        let {data} = await axios(API);
        console.log(data);
        
        let username = JSON.parse(localStorage.getItem('username'));
        let userObj = data.find((item) => item.username === username);
        setFavUser(userObj);
    }

    //useEffect при загрузке страницы нужен будет

    const getFavorites = async () => {
        let {data} = await axios(API);
        let username = JSON.parse(localStorage.getItem('username'));
        let userObj = data.find((item) => item.username === username);

        setFavorites(userObj.favorites)

    };

    const addProductToFav = async(product, userId) => {
        let favList = favorites;

        let favProdToFind = favList.find(item => item.id === product.id)

        if(favProdToFind) {
            favList = favList.filter(item => item.id !== product.id)
        } else {
            favList.push(product);
        };

        await axios.patch(`${API}/${userId}`, {favorites: favList});

        // setFavorites(favList);
        getFavorites();

    };

    const deleteProdFromFav = async (productId, userId) => {
        let favList = favorites;
        favList = favList.filter(item => item.id !== productId);
        await axios.patch(`${API}/${userId}`, {favorites: favList});

        // setFavorites(favList);
        getFavorites();
    };

    const checkProductInFav = async(productId) => {

        let favObj = favorites.find(item => item.id === productId);

        if(favObj) {
            return true
        } else {
            return false
        }
    };

    const favCleaner = async (userId) => {
        await axios.patch(`${API}/${userId}`, {favorites: []});
        // setFavorites([])
        getFavorites();
    };

    const values={
        favorites, 
        favUser,

        getFavorites,
        getFavUser,
        addProductToFav,
        deleteProdFromFav,
        checkProductInFav,
        favCleaner
    }

  return (
    <favoritesContext.Provider value ={ values} >
        {children}
    </favoritesContext.Provider>
  )
}

export default FavoritesContextProvider