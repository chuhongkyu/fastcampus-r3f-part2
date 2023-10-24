import { useEffect } from "react";
import Earth from "./Earth";
import Weather from "./Weather";
import { getCurrentWeatherApi } from "../utils/weatherApi";

const API = process.env.REACT_APP_API_KEY;

const Scene = () => {
    useEffect(()=>{
        getCurrentWeatherApi(44.34,10.99, API)
    },[])
    return(
        <>
            <Earth position={[0,-2,0]}/>
            <Weather position={[0.5,0,0]} weather={'rain'}/>
            <Weather position={[0,0,0]} weather={'clear'}/>
            <Weather position={[-0.5,0,0]} weather={'snow'} />
        </>  
    )
}

export default Scene;