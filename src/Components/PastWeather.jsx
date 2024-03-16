import React from 'react';
import { kelvinToFahrenheit } from '../utils';

function PastWeather({ cityName, weatherData }) {
  //! Add error handling
  if (!weatherData) {
    return null;
  }

  return (
    <div className='p-4'>
      <hr />
      {/* //! First letter of cityName always capitalized */}
      <h2 className='text-sky-700 text-2xl sm:text-2xl font-bold p-5'>{cityName.charAt(0).toUpperCase() + cityName.slice(1)} Past Weather</h2>
      <div className='flex flex-wrap flex-col gap-4'>
        {weatherData.historical_weather.map((weather, index) => (
          <div key={index} className='flex flex-wrap bg-white rounded-lg shadow-md'>
            <div className='p-5 flex justify-center items-center'>
              <img src={`http://openweathermap.org/img/w/${weather.data[0].weather[0].icon}.png`} alt='Weather Icon' className='w-12 h-12 sm:w-16 sm:h-16 float-left' />
            </div>
            <div className='p-5'>
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
