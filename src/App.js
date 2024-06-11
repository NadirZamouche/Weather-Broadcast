import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import './App.css';
import weatherImage from './images/weather.webp'; // Ensure the correct path to your image


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSetWeatherData = (data) => {
    setWeatherData(data);
    setError(null); // Clear the error when new weather data is set
  };

  return (
    <div className="App">
      <img src={weatherImage} alt="Weather" className="weather-image" />
      <h1>Weather App</h1>
      <SearchBar setWeatherData={handleSetWeatherData} setError={setError} />
      {error && <div className="error-message">{error}</div>}
      {weatherData && !error && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
