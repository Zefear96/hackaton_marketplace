import React, {useEffect, useState} from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';

const Favorites = () => {
    const {getFavorites, deleteProdFromFav, favCleaner} = useFavorites();
    const {getUsers, user, checkUserInUsers} = useAuth();

    useEffect(() => {
      getUsers();
    }, []);

    let username = JSON.parse(localStorage.getItem('username'));

    const [favorites, setFavorites] = useState(getFavorites());
    const [userObj, setUserObj] = useState(checkUserInUsers(username))

  return (
    <div>Favorites
        {favorites.map(item => (
            <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => deleteProdFromFav(item.id, userObj.id)}> Delete from my favList</button>
            </div>
            ))}
            <button onClick={favCleaner(userObj.id)}>Clean my FavList</button>
    </div>
  )
}

export default Favorites