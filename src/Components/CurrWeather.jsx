import React, { useState } from 'react';
import PastWeather from './PastWeather.jsx';
import { kelvinToFahrenheit } from '../utils.js';

// cityName and weatherData from SearchBar
function CurrWeather({ cityName, weatherData }) {
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
    <div className='container mx-auto p-4 bg-gray-100 rounded-lg mt-4'>
      {/* //! First letter of cityName always capitalized */}
      <h1 className='text-sky-700 text-2xl sm:text-3xl font-bold p-1'>{cityName.charAt(0).toUpperCase() + cityName.slice(1)} Current Weather</h1>
      <div className='flex flex-col gap-4 p-3'>
        <div className='bg-white p-3 mt-4 flex justify-evenly items-center flex-wrap'>
          <div>
            <img src={`http://openweathermap.org/img/w/${iconId}.png`} alt='Weather Icon' className='w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4' />
          </div>
          <div className='mt-4 p-2'>
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
          <div className='mt-4 p-2'>
            <button className='text-white bg-sky-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-cyan-500 dark:focus:ring-sky-800' onClick={handleViewPastWeather}>
              {showPastWeather ? 'Hide Past Weather Data' : 'View Past Weather Data'}
            </button>
          </div>
          {showPastWeather && <PastWeather cityName={cityName} weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default CurrWeather;
