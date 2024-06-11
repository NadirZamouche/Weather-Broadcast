import React from 'react';

function WeatherParameter({ label, value , icon}) {
  return (
    <div className="weather-card">
      <img src={icon} className="weather-icon" />
      {label}: {value}
    </div>
  );
}

export default WeatherParameter;
