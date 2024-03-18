import React, { useState } from 'react';
import AllWeather from './AllWeather.jsx';

//! Added success and error messaging
const SearchBar = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.REACT_APP_NODE_ENV === 'production' ? 'https://bain-weather-app-1bb2d43eb419.herokuapp.com/' : 'http://127.0.0.1:5001';

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      //TODO: Remove console logs from prod build with Terser
      console.error(error);
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-2 md:p-5 lg:p-10'>
      <form className='max-w-1xl mx-auto' onSubmit={handleSubmit}>
        <label htmlFor='default-search'>
          <p className='p-2 text-gray-600'>Enter cities separated by commas:</p>
        </label>
        <div className='flex justify-center flex-wrap'>
          <div className='relative flex-grow'>
            <div className='flex items-center'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none'>
                <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </div>
              <input type='search' id='default-search' className='block p-4 pl-10 m-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus-ring-10' placeholder='ex: Chicago, Paris, Tokyo, New Orleans' required value={city} onChange={e => setCity(e.target.value)} aria-label='Enter city names separated by commas' />
            </div>
          </div>
          <button type='submit' className='search-btn' aria-label='Search'>
            Search
          </button>
        </div>
      </form>
      {/* Loading message */}
      {loading && (
        <div className='flex justify-center text-green-600 p-2'>
          <p>Loading weather data...</p>
        </div>
      )}
      {/* Error message */}
      <div className='flex justify-center text-red-500 p-2' role='alert' aria-live='assertive'>
        {error && <p>{error}</p>}
      </div>
      {/* Weather Data */}
      <div className='flex flex-wrap space-x-2'>{weatherData && <AllWeather weatherData={weatherData} cities={cities} />}</div>
    </div>
  );
};

export default SearchBar;
