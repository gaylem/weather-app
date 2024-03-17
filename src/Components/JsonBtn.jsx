import React from 'react';

// Receives weatherData from SearchBar component
const JsonBtn = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const openJsonInNewTab = () => {
    // Converts the weatherData object to JSON string
    // no replacer function, 2 spaces
    const jsonString = JSON.stringify(weatherData, null, 2);
    // Converts JSON string to blob which can be easily opened in a new tab by the browser
    const blob = new Blob([jsonString], { type: 'application/json' });
    // Creates a DOMString containing a URL representing blob
    // "blob:http://example.com/01234567-89ab-cdef-0123-456789abcdef"
    const url = URL.createObjectURL(blob);
    // Open url in new tab
    window.open(url, '_blank');
    // Releases the resources associated with the URL once the tab is closed
    // Important for memory management, prevents memory leaks
    URL.revokeObjectURL(url);
  };

  return (
    <div className='p-1 md:p-2 lg:p-5'>
      <button onClick={openJsonInNewTab} className='btn-primary'>
        View Raw JSON in New Tab
      </button>
    </div>
  );
};

export default JsonBtn;
