import React, { useState } from 'react';
import AllWeather from './AllWeather.jsx';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const baseUrl = process.env.REACT_APP_NODE_ENV === 'production' ? 'https://bain-weather-app-1bb2d43eb419.herokuapp.com/' : 'http://127.0.0.1:5001';

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Cities typed into search box are turned into an array and the state is updated
      const citiesArray = city.split(',').map(c => c.trim());
      setCities(citiesArray);

      // Concurrently fetch data for all cities in citiesArray
      const responses = await Promise.all(citiesArray.map(c => fetch(`${baseUrl}/weather?city=${c}`)));

      // All requests must be completed before continuing, otherwise throw error
      const weatherData = await Promise.all(
        responses.map(async response => {
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          return await response.json();
        }),
      );

      // Update weatherData state
      setWeatherData(weatherData);
    } catch (error) {
      //! Remove console logs from prod build with Terser
      console.error(error);
      setWeatherData(null);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-10'>
      <form className='max-w-2xl mx-auto' onSubmit={handleSubmit}>
        <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
          Search
        </label>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </div>
          <input type='search' id='default-search' className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Search for cities with comma-separated values' required value={city} onChange={e => setCity(e.target.value)} />
          <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-sky-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-cyan-500 dark:focus:ring-sky-800'>
            Search
          </button>
        </div>
      </form>
      <div className='flex flex-wrap sm:flex-nowrap space-x-2'>{weatherData && <AllWeather weatherData={weatherData} cities={cities} />}</div>
    </div>
  );
};

export default SearchBar;
