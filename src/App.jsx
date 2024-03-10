import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import SearchBar from './Components/SearchBar.jsx';

function App({ cityName }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <SearchBar />
        <div className='container mx-auto flex flex-col divide-solid p-10'>
          {!cityName && <p>Search for a city to view the current and past weather.</p>}
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
