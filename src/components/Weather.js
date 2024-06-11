import React from 'react';
import WeatherParameter from './WeatherParameter';
import TemperatureIcon from '../images/icone_temperature.png';
import ConditionIcon from '../images/icone_condition.png';
import WindIcon from '../images/icone_wind.png';
import HumidityIcon from '../images/icone_humidity.png';
import PressureIcon from '../images/icone_pressure.png';
import UVIcon from '../images/icone_uv.png';
import CloudIcon from '../images/icone_cloud.png';
import VisibilityIcon from '../images/icone_visibility.png';

function Weather({ weatherData, error }) {
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  
  return (
    <div>
      <h2>Weather in {weatherData.location.name}</h2>
      <div className="weather-cards">
        <WeatherParameter icon={TemperatureIcon} label="Temperature" value={`${weatherData.current.temp_c} °C`} />
        <WeatherParameter icon={ConditionIcon} label="Condition" value={weatherData.current.condition.text} />
        <WeatherParameter icon={WindIcon} label="Wind Speed" value={`${weatherData.current.wind_kph} km/h`} />
        <WeatherParameter icon={HumidityIcon} label="Humidity" value={`${weatherData.current.humidity}`} />
        <WeatherParameter icon={PressureIcon} label="Pressure" value={`${weatherData.current.pressure_mb} mb / ${weatherData.current.pressure_in} in`} />
        <WeatherParameter icon={UVIcon} label="UV Index" value={`${weatherData.current.uv}`} />
        <WeatherParameter icon={CloudIcon} label="Cloud Cover" value={`${weatherData.current.cloud}`} />
        <WeatherParameter icon={VisibilityIcon} label="Visibility" value={`${weatherData.current.vis_km} km`} />
      </div>
    </div>
  );
}

export default Weather;
