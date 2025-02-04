import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 39.05,
        humidity: 70,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "haze",
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}