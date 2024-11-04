import { useState } from "react";
import { LocationContext } from "../context";


const LocationProvider = ({children}) => {
     const [selecteedLocation ,setSelectedLocation] = useState({
        location:"",
        latitude:0,
        longitude:0
     })
    return (
      <LocationContext.Provider value={{selecteedLocation , setSelectedLocation}}>
           {children}
      </LocationContext.Provider>
    );
};

export default LocationProvider;