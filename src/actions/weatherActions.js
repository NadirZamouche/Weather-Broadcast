import axios from 'axios';

export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4b14c6addf9c4c06a4a94839241106&q=${city}&units=metric`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
          console.error('City not found:', error.response.data);
        } else {
          console.error('Error fetching weather data:', error);
        }
        return null;
      }    
};

export default fetchWeatherData;