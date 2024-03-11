import React, { useState } from 'react';
import ReactJson from 'react-json-view';

const JsonBtn = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Return null if weatherData is not available yet
  }

  const [showJson, setShowJson] = useState(false);

  const onToggle = () => {
    setShowJson(!showJson);
  };

  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <button onClick={onToggle} className='text-blue-500 underline hover:text-blue-700'>
        View Raw JSON
      </button>
      {showJson && (
        <div className='json-modal'>
          <ReactJson src={weatherData} theme='monokai' />
        </div>
      )}
    </div>
  );
};

export default JsonBtn;
