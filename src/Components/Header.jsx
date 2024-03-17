import React from 'react';

function Header() {
  return (
    <header className='bg-gradient-to-r from-sky-700 to-cyan-500 text-white py-4'>
      <div className='container mx-auto flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>Weather App</h1>
      </div>
    </header>
  );
}

export default Header;
