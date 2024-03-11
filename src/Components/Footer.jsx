import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center bg-gray-800 text-white p-5'>
      <p>
        Weather data provided by{' '}
        <a href='https://openweathermap.org/' className='text-cyan-500 hover:underline'>
          Open Weather API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
