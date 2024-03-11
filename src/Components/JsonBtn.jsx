import React from 'react';

const JsonBtn = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const openJsonInNewTab = () => {
    const jsonString = JSON.stringify(weatherData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  };

  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <button onClick={openJsonInNewTab} className='text-white bg-sky-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-cyan-500 dark:focus:ring-sky-800'>
        View Raw JSON in New Tab
      </button>
    </div>
  );
};

export default JsonBtn;
