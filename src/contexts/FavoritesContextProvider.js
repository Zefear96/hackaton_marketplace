import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import { useAuth } from './AuthContextProvider';

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const API = 'http://localhost:8000/users';

const FavoritesContextProvider = ({children}) => {

    const {checkUserInUsers, getUsers} = useAuth();

    //useEffect при загрузке страницы нужен будет

    useEffect(() => {
        getUsers();
    }, [])

    const getFavorites = () => {
  
        let username = JSON.parse(localStorage.getItem('username'));
        let userObj = checkUserInUsers(username); //вернет объект юзера
    
        return userObj.favorites

    };

    const addProductToFav = async(product, userId) => {
       
        let favorites = getFavorites();

        let favProdToFind = favorites.find(item => item.id === product.id)

        if(favProdToFind) {
            favorites = favorites.filter(item => item.id !== product.id)
        } else {
            favorites.push(product)
        };

        await axios.patch(`${API}/${userId}`, {favorites: favorites});

        getFavorites();

    };

    const deleteProdFromFav = async (productId, userId) => {
        let favorites = getFavorites();
        favorites = favorites.filter(item => item.id !== productId);
        await axios.patch(`${API}/${userId}`, {favorites})
    };

    const checkProductInFav = async(productId) => {
        let favorites = getFavorites();

        let favObj = favorites.find(item => item.id === productId);

        if(favObj) {
            return true
        } else {
            return false
        }
    };

    const favCleaner = async (userId) => {
        await axios.patch(`${API}/${userId}`, {favorites: []})
    };

    const values={
        addProductToFav,
        getFavorites,
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