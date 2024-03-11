import React, { useState } from 'react';
import CurrWeather from './CurrWeather.jsx';
import JsonBtn from './JsonBtn.jsx';
import ExcelBtn from './ExcelBtn.jsx';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const citiesArray = city.split(',').map(c => c.trim());
      setCities(citiesArray);

      const responses = await Promise.all(citiesArray.map(c => fetch(`http://127.0.0.1:5000/weather?city=${c}`)));

      const weatherData = await Promise.all(
        responses.map(async response => {
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          return await response.json();
        }),
      );

      console.log(weatherData);
      setWeatherData(weatherData);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  return (
    <div className='max-w-5xl mx-auto p-8'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
          Search
        </label>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </div>
          <input type='search' id='default-search' className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Search for cities with comma-separated values' required value={city} onChange={e => setCity(e.target.value)} />
          <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800'>
            Search
          </button>
        </div>
      </form>
      <div className='flex space-x-4'>
        {weatherData && <JsonBtn weatherData={weatherData} />}
        {weatherData && <ExcelBtn weatherData={weatherData} />}
      </div>
      {weatherData && weatherData.map((data, index) => <CurrWeather key={index} cityName={cities[index]} weatherData={data} />)}
    </div>
  );
};

export default SearchBar;
