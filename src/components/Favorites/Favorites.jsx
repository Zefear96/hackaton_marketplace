import React, {useEffect} from 'react';
// import { useFavorites } from '../../contexts/FavoritesContextProvider';

const Favorites = () => {
    // const {getFavorites, deleteProdFromFav, favCleaner} = useFavorites();

    // useEffect(() => {
    //     getFavorites()
    // }, []);

    // const [favorites, setFavorites] = getFavorites()

  return (
    <div>Favorites
        {/* {favorites !== ''?.map(item => (
            <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => deleteProdFromFav(item.id)}></button>
            </div>
            ))}
            <button onClick={favCleaner}></button> */}
    </div>
  )
}

export default Favorites