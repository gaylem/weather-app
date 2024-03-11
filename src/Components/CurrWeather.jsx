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
    <div className='container mx-auto p-10'>
      <h1 className='text-sky-700'>{cityName} Current Weather</h1>
      <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mt-4'>
        <div className='bg-gray-100 p-4 flex items-center flex-wrap'>
          <img src={`http://openweathermap.org/img/w/${iconId}.png`} alt='Weather Icon' className='mr-4' />
          <div className='grid grid-cols-2 gap-4 mt-4' style={{ flexWrap: 'wrap' }}>
            <p>Temperature: {main.temp}</p>
            <p>Max Temperature: {main.temp_max}</p>
            <p>Min Temperature: {main.temp_min}</p>
            <p>Main Weather: {mainWeather}</p>
            <p>Description: {description}</p>
            <p>Feels Like: {main.feels_like}</p>
            <p>Humidity: {main.humidity}</p>
            <p>Pressure: {main.pressure}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrWeather;
