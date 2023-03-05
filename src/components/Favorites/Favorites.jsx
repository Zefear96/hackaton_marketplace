import React, {useEffect, useState} from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';

const Favorites = () => {
    const {getFavorites, deleteProdFromFav, favCleaner, favorites, favUser, getFavUser} = useFavorites();

    useEffect(() => {
      getFavUser();
    }, []);

    // useEffect(() => {
    //   console.log(favUser.favorites);
    // }, [favUser, ])

  return (
    <div>Favorites
        {favUser.favorites?.map(item => (
            <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => deleteProdFromFav(item.id, favUser.id)}> Delete from my favList</button>
            </div>
            ))}
            <button onClick={() => favCleaner(favUser.id)}>Clean my FavList</button>
    </div>
  )
}

export default Favorites