import Home from "./layout/Home";
import { LocationProvider, WeatherProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";

export default function App() {
  

  return (
    <WeatherProvider>
      <FavouriteProvider>
        <LocationProvider>
             <Home/>
        </LocationProvider>
    
      </FavouriteProvider>
    </WeatherProvider>
  )
}