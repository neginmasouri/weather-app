import React, { useState, useEffect } from "react";
import "./Weather.css";
const api='6fabed0f1be0d484bf0db69bb9afeb94'
const Weather=()=>{
  const [search,setSearch]=useState('')
  const[weather,setWeather]=useState({})
  const getData=async ()=>{
   const getapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${api}`)
   const result= await getapi.json();
   setWeather(result)
  }
  useEffect(()=>{
   getData()
  },[search])

  return(
        <div className="container">
         <div className="weather">
         <h2 className="weather-text">Weather App</h2>
          <input
          type="text"
          className="input"
          placeholder="Enter your location"
          value={search}
          onChange={e=>setSearch(e.target.value)}
          />
         </div>
        {
          weather.main && weather.weather[0]?(
            <div className="info">   
               <h2>country:{weather.sys.country}</h2>
            <h2>city:{weather.name}</h2>
            <h2>{weather.weather[0].main}</h2>
            <h2>humidity:{weather.main.humidity}</h2>
            <h2>temperature:{Math.round(weather.main.temp)}</h2>
            </div>
          ):''
        }
          </div>
  )
}
export default Weather;
