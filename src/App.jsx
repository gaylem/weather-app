import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import SearchBar from './Components/SearchBar.jsx';
import AllWeather from './Components/AllWeather.jsx';

function App({ cityName }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <SearchBar />
        <AllWeather />
      </main>
      <Footer />
    </div>
  );
}

export default App;
