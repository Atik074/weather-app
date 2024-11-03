import { useContext } from "react";
import Cloud from "../../../assets/cloud.svg" 
import Haze from "../../../assets/haze.svg"
import Snow from "../../../assets/icons/snow.svg"
import Thunder from "../../../assets/thunder.svg"
import Rainy from "../../../assets/rainy.svg"
import Sunny from "../../../assets/icons/sunny.svg"
import Pin from "../../../assets/pin.svg"
import { WeatherContext } from "../../../context";
import {  getFormattedDate } from "../../../utils/getFormattedData";

export default function WeatherHeadline(){
  const {weatherData } = useContext(WeatherContext)
   const {temperature ,location,time,climate} =weatherData


   function getWeatherIcon(climate) {
      switch (climate) {
        case "Rain":
            return Rainy;
        case "Clouds":
            return Cloud;
        case "Clear":
            return Sunny;
        case "Snow":
            return Snow;
        case "Thunder":
            return Thunder;
        case "Fog":
            return Haze;
        case "Haze":
            return Haze;
        case "Mist":
            return Haze;

        default:
            return Sunny;
    }
}


console.log(getWeatherIcon(climate));

    return (
           
        <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="climate" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.floor(temperature)}°
            </h1>
            
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={Pin}alt="Pin"/>
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        
        <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -
        {getFormattedDate(time, "date", false)}
      </p>
      </div>
    );
}