/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  
  
  const addToFavourite = (latitude, longitude, location) => {
    setFavourites(
      [
      
        ...favourites, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }])

  };

  const removeFavourite = (location) => {
    const resFavourite = favourites.filter((fav) => fav.location !== location);
    setFavourites(resFavourite);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourite, removeFavourite, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
