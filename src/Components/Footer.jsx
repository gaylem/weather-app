import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center bg-gray-800 text-white p-5'>
      <p>
        Weather data provided by{' '}
        <a href='https://openweathermap.org/' className='text-blue-500 hover:underline'>
          OpenWeatherMap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
