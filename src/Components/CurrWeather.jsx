import React from 'react';

function CurrWeather({ cityName, weatherData }) {
  if (!weatherData) {
    return null; // Return null if weatherData is not available yet
  }

  const { weather, coord, main } = weatherData.current_weather;
  const mainWeather = weather[0].main;
  const description = weather[0].description;
  const iconId = weather[0].icon;
  const { lat, lon } = coord;

  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <h1 className='text-sky-700'>{cityName} Current Weather</h1>
      <div className='flex items-center'>
        <img src={`http://openweathermap.org/img/w/${iconId}.png`} alt='Weather Icon' className='mr-4' />
        <div>
          <p>Temperature: {main.temp}</p>
          <p>Main Weather: {mainWeather}</p>
          <p>Description: {description}</p>
          <p>Feels Like: {main.feels_like}</p>
          <p>Humidity: {main.humidity}</p>
          <p>Pressure: {main.pressure}</p>
          <p>Max Temperature: {main.temp_max}</p>
          <p>Min Temperature: {main.temp_min}</p>
          <p>Latitude: {lat}</p>
          <p>Longitude: {lon}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrWeather;
