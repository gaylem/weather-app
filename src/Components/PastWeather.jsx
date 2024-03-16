import React from 'react';
import { kelvinToFahrenheit } from '../utils';

function PastWeather({ cityName, weatherData }) {
  //! Add error handling
  if (!weatherData) {
    return null;
  }

  return (
    <div className='container mx-auto p-4'>
      {/* //! First letter of cityName always capitalized */}
      <h2 className='text-sky-700 text-2xl sm:text-2xl font-bold p-1'>{cityName.charAt(0).toUpperCase() + cityName.slice(1)} Past Weather</h2>
      <div className='flex flex-col gap-4 p-3'>
        {weatherData.historical_weather.map((weather, index) => (
          <div key={index} className='flex bg-white rounded-lg shadow-md p-3'>
            <div>
              <img src={`http://openweathermap.org/img/w/${weather.data[0].weather[0].icon}.png`} alt='Weather Icon' className='w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 float-left' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Date: {new Date(weather.data[0].dt * 1000).toLocaleDateString()}</h3>
              <p>Temperature: {kelvinToFahrenheit(weather.data[0].temp)}°F</p>
              <p>Main Weather: {weather.data[0].weather[0].main}</p>
              <p>Description: {weather.data[0].weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastWeather;
