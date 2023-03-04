import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import { useAuth } from './AuthContextProvider';

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const API = 'http://localhost:8000/users';

const FavoritesContextProvider = ({children}) => {

    const {checkUserInUsers, getUsers} = useAuth();
    const [favorites, setFavorites] = useState(null); //??
    const [user, setUser] = useState({})

    //useEffect при загрузке страницы нужен будет

    useEffect(() => {
        getUsers()
    }, [])

    const getFavorites = () => {
  
        let username = JSON.parse(localStorage.getItem('username'));
        let userObj = checkUserInUsers(username); //вернет объект юзера
        console.log(userObj);
        setUser(userObj);
    
        setFavorites(userObj.favorites);
        console.log(userObj.favorites);
    
        return userObj.favorites

    };

    const addProductToFav = async(product) => {
       
        let favorites = getFavorites();
        console.log(user);

        let favProdToFind = favorites.find(item => item.id === product.id)

        if(favProdToFind) {
            favorites = favorites.filter(item => item.id !== product.id)
        } else {
            favorites.push(product)
        };

        await axios.post(`${API}/${user.id}`, favorites);

        getFavorites();

    };

    const deleteProdFromFav = async (id) => {
        let favorites = getFavorites();
        favorites = favorites.filter(item => item.id !== id);
        await axios.post(`${API}/${id}`, favorites)
    };

    const checkProductInFav = async(id) => {
        let favorites = getFavorites();

        let favObj = favorites.find(item => item.id === id);

        if(favObj) {
            return true
        } else {
            return false
        }
    };

    const favCleaner = async (id) => {
        setFavorites('');
        await axios.post(`${API}/${id}`, favorites)
    };

    const values={
        favorites,

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