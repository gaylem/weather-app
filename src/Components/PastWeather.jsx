import React from 'react';

function CurrWeather({ cityName }) {
  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <h1 className='text-sky-700'>Past Weather</h1>
      <div>{!cityName && <p>Search for a city to view past weather.</p>}</div>
    </div>
  );
}

export default CurrWeather;
