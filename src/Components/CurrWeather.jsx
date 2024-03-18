import React, { useState } from 'react';
import PastWeather from './PastWeather.jsx';
import { kelvinToFahrenheit } from '../utils.js';

// cityName and weatherData from SearchBar
function CurrWeather({ cityName = '', weatherData }) {
  //! Moved this up
  if (!weatherData) {
    return null;
  }

  const [showPastWeather, setShowPastWeather] = useState(false);

  // Extract weather, coord, and main objects
  const { weather, coord, main } = weatherData.current_weather;

  // Store properties as variables
  const mainWeather = weather[0].main;
  const description = weather[0].description;
  const iconId = weather[0].icon;
  const { lat, lon } = coord;

  const handleViewPastWeather = () => {
    setShowPastWeather(prevState => !prevState);
  };

  return (
    <div className='container mx-auto w-full bg-gray-100 rounded-lg mt-4 p-3 md:p-4 lg:p-4'>
      {/* //! First letter of cityName always capitalized */}
      <h1 className='h1 [text-shadow:_0_1px_5px_rgb(0_0_0_/_20%)]'>
        {cityName
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}{' '}
        Current Weather
      </h1>
      <div className='flex flex-col gap-4 p-3'>
        <div className='flex flex-wrap justify-evenly items-center bg-white rounded-lg shadow-md p-3 '>
          <div className='p-1 md:p-2 lg:p-5'>
            <img src={`http://openweathermap.org/img/w/${iconId}.png`} alt='Weather Icon' className='w-12 h-12 mr-3' />
          </div>
          <div className='p-1 md:p-2 lg:p-5'>
            <p>Temperature: {kelvinToFahrenheit(main.temp)}°F</p>
            <p>Max Temperature: {kelvinToFahrenheit(main.temp_max)}°F</p>
            <p>Min Temperature: {kelvinToFahrenheit(main.temp_min)}°F</p>
            <p>Main Weather: {mainWeather}</p>
            <p>Description: {description}</p>
            <p>Feels Like: {kelvinToFahrenheit(main.feels_like)}°F</p>
            <p>Humidity: {main.humidity}</p>
            <p>Pressure: {main.pressure}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
          </div>
        </div>
        <div className='mt-4 p-2'>
          <button className='btn-primary' onClick={handleViewPastWeather}>
            {showPastWeather ? 'Hide Past Weather Data' : 'View Past Weather Data'}
          </button>
        </div>
        {showPastWeather && <PastWeather cityName={cityName} weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default CurrWeather;
