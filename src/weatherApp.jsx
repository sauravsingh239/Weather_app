import InfoBox from "./infoBox";
import BoxSearch from "./boxSearch"
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:23.19,
        humidity :68,
        temp:23.05,
        tempMax:23.05,
        tempMin:23.05,
        weather:"haze"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>
                Weather App By SAURAV
            </h2>
                <BoxSearch updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            
        </div>
    )
}