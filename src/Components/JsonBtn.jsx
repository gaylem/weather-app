import React from 'react';

const JsonBtn = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Return null if weatherData is not available yet
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
      <button onClick={openJsonInNewTab} className='text-blue-500 underline hover:text-blue-700'>
        View Raw JSON in New Tab
      </button>
    </div>
  );
};

export default JsonBtn;
