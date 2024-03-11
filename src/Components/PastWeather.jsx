import React from 'react';

function PastWeather({ cityName, weatherData }) {
  return (
    <div className='container mx-auto p-10'>
      <h2 className='text-sky-700 text-2xl font-bold'>{cityName} Past Weather</h2>
      <div className='flex flex-wrap gap-4 mt-4 bg-gray-100 rounded-lg'>
        {weatherData.historical_weather.map((weather, index) => (
          <div key={index} className='p-4 flex items-center flex-wrap'>
            <img src={`http://openweathermap.org/img/w/${weather.data[0].weather[0].icon}.png`} alt='Weather Icon' className='mr-4' />
            <div>
              <h3 className='text-lg font-semibold'>Date: {new Date(weather.data[0].dt * 1000).toLocaleDateString()}</h3>
              <p>Temperature: {weather.data[0].temp}</p>
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
