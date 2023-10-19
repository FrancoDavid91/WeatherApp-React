import { useState } from 'react'
import React from 'react'

const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'b0542a4709365d83fd444f9ef146aa95'

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState(null)

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.length > 0) fetchWeather()
        console.log(city)
    }

    const fetchWeather = async () => {
        try {
            
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
            const data = await response.json()
            setDataWeather(data)
        } catch (error) {
            console.error('Ocurrió el siguiente problema: ' , error.message)
        }
    }


  return (
    <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Enter your city'
            value={city}
            onChange={handleChangeCity}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default WeatherApp