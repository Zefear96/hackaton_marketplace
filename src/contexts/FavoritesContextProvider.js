import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import { useAuth } from './AuthContextProvider';

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const API = 'http://localhost:8000/users';

const FavoritesContextProvider = ({children}) => {

    const {checkUserInUsers} = useAuth();
    const [favorites, setFavorites] = useState(null); //??
    const [user, setUser] = useState('')

    //useEffect при загрузке страницы нужен будет

    const getFavorites = () => {
        let username = JSON.parse(localStorage.getItem('username'));
        let userObj = checkUserInUsers(username) //вернет объект юзера
        setUser(userObj)

        setFavorites(user.favorites);

        // if(favorites === '') { //?

        // } //не нужно кажется

    };

    const addProductToFav = async(product) => {
        let favorites = getFavorites();

        let favProdToFind = favorites.find(item => item.id === product.id)

        if(favProdToFind) {
            favorites = favorites.filter(item => item.id !== product.id)
        } else {
            favorites.push(product)
        };

        await axios.patch(`${API}/${user.id}`, favorites);

        getFavorites();

    };

    const deleteProdFromFav = async (id) => {
        let favorites = getFavorites();
        favorites = favorites.filter(item => item.id !== id);
        await axios.patch(`${API}/${id}`, favorites)
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
        await axios.patch(`${API}/${id}`, favorites)
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