import React from 'react';
import CurrWeather from './CurrWeather.jsx';
import JsonBtn from './JsonBtn.jsx';
import ExcelBtn from './ExcelBtn.jsx';

const AllWeather = ({ weatherData, cities }) => {
  return (
    <div className='flex flex-wrap'>
      <div className='flex flex-wrap mx-auto p-5'>
        {weatherData && <JsonBtn weatherData={weatherData} />}
        {weatherData && <ExcelBtn weatherData={weatherData} />}
      </div>
      {weatherData && weatherData.map((data, index) => <CurrWeather key={index} cityName={cities[index]} weatherData={data} />)}
    </div>
  );
};

export default AllWeather;
