import Home from "./layout/Home";
import { WeatherProvider } from "./provider";

export default function App() {
  

  return (
    <WeatherProvider>
      <Home/>
    </WeatherProvider>
  )
}