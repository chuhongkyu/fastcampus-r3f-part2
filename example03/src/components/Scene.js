import { useEffect, useState } from "react";
import Earth from "./Earth";
import Weather from "./Weather";
import Lights from "./Lights";
import { getCityWeather } from "../utils/weatherApi";
import { cities } from "../utils/cities";

const API = process.env.REACT_APP_API_KEY;

const Scene = () => {
    const [content, setContent] = useState(null);

    const getCitiesWeather = () => {
        const promises = cities?.map((city) => {
          return getCityWeather(city, API);
        });
      
        Promise.all(promises)
            .then((weatherDataArray) => {
                setContent(weatherDataArray);
            })
            .catch((error) => {
                console.error("Error Api", error);
            });
    };

    useEffect(() => {
        getCitiesWeather();
    }, []);

    useEffect(()=>{
        console.log(content)
    },[content])

    return(
        <>
            <Lights/>
            <Earth position={[0,-2,0]}/>
            {content?.map((el, i)=> {
                return(
                    <Weather 
                        key={i + "KEY"} 
                        position={[-1 + i*0.5,0,0]} 
                        weather={el.weatherData?.weather[0]?.main?.toLowerCase()}/>
                )
            })}   
        </>  
    )
}

export default Scene;