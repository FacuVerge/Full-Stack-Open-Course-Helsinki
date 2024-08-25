import { useState, useEffect } from "react"
import countriesService from "./countriesService"
import weatherService from "./weatherService"

const Countrie = ({countrie}) => {

    const appid = import.meta.env.VITE_WEATHER_KEY
    const [information, setInformation] = useState(null)
    const [weatherInformation, setWeatherInformation] = useState(null)

    useEffect(() => {
        countriesService.getByName(countrie).then(data => {
            setInformation(data)
            weatherService.getWeather(data.name.common, appid).then(weatherInfo => setWeatherInformation(weatherInfo))
        })
    }, [countrie])

    if(!information) {
        return null
    }

    if(!weatherInformation) {
        return null
    }

    return (
        <>
            <h1>{information.name.common}</h1>
            <p>Capital:  {information.capital[0]}</p>
            <p>Area:  {information.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(information.languages).map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            
            <img src={information.flags.png} alt={information.flags.alt} />
            <h2>Wheather in {information.name.common}</h2>
            <p>Temperature: {weatherInformation.main.temp - 273.15} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}.png`} alt={'Wheather image'}/>
            <p>Wind: {weatherInformation.wind.speed} m/s</p>
        </>
    )
}

export default Countrie