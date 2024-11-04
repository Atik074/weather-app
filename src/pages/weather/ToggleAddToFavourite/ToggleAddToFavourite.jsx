import { useContext, useEffect, useState } from "react";
import Heart from "../../../assets/heart.svg";
import RedHeart from "../../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../../context";

export default function ToggleAddToFavourite() {
  const { addToFavourite, removeFavourite, favourites} =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
       


  useEffect(()=>{
    const found =favourites.find(fav =>fav.location === location)
    setIsFavourite(found)

  },[favourites,location])

 

  const handleFavourite = () => {

    const found = favourites.find((fav) => fav.location === location);
    console.log('cound' ,found);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else{
      removeFavourite(location);
    }
    
    setIsFavourite(!isFavourite);

  };




  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#887f7f4d]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeart : Heart} alt="heartIcon" />
        </button>
      </div>
    </div>
  );
}
