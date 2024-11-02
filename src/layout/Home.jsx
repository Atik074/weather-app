import Header from "../pages/header/Header";
import WeatherBoard from "../pages/weather/WeatherBoard";

export default function Home(){
    return (
        <>
        <Header/>
        
        <main>
            <section>
                 <WeatherBoard/>
            </section>
        </main>
        
         </>
    );
}