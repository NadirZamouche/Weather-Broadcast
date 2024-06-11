import React, { useState } from 'react';
import { fetchWeatherData } from '../actions/weatherActions';

function SearchBar({ setWeatherData, setError }) {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
    } else {
      setError('City not found. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
}

export default SearchBar;
