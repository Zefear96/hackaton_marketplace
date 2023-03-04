import React, {useEffect, useState} from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';

const Favorites = () => {
    const {getFavorites, deleteProdFromFav, favCleaner} = useFavorites();
    const {getUsers} = useAuth();

    useEffect(() => {
      getUsers();
    }, []);

    useEffect(() => {
        getFavorites()
    }, []);

    const [favorites, setFavorites] = useState([]);

  return (
    <div>Favorites
        {favorites.map(item => (
            <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => deleteProdFromFav(item.id)}></button>
            </div>
            ))}
            <button onClick={favCleaner}></button>
    </div>
  )
}

export default Favorites