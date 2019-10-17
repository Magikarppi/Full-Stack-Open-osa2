import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleCountry = ({ data }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&units=metric&APPID=b1300f993d6d40e0e82e8e033d6d3fac`)
            .then(promise => setWeather([promise.data]))
    }, [data])


    return (
        (weather.length > 0) ?
            <div>
                <h1>
                    {data[0].name}
                </h1>
                <p>Capital: {data[0].capital}</p>
                <p>Population: {data[0].population}</p>
                <h2>Languages:</h2>
                <ul>
                    {data[0].languages.map(e => <li key={`${e.name}_${e.iso639_1}`}>{e.name}</li>)}
                </ul>
                <img src={data[0].flag} alt="country flag" width='100px'></img>
                <h2>Weather in {weather[0].name}</h2>
                <p>Temperature: {weather[0].main.temp} Celcius</p>
                <p>{weather[0].weather[0].description}</p>
                <p>Wind : {weather[0].wind.speed} m/s</p>
            </div>
            : null
    )

}

export default SingleCountry