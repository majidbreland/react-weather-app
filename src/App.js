import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState(null);


  useEffect(() => {
      //api call
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=37.77&longitude=-122.42&hourly=apparent_temperature,windspeed_10m&temperature_unit=fahrenheit`)
        .then(response => {
          console.log(response.data);
          setWeather(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    
  }, []);

  return (
    <div>
      <h1 className="title">Weather App</h1>
      <h3 className="info">The Weather in San Francisco is:</h3>
      <div className="weather">
        { weather && weather.hourly.apparent_temperature[0]}<span className="degree-f">°F</span>
      </div>
      <h3 className="info-2">The Wind speed is: </h3>
      <div className="wind">
        { weather && weather.hourly.windspeed_10m[0]}
        <span className="mph">mph</span>
      </div>

    </div>
  );
}

export default App;
