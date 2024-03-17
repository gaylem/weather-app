import React from 'react';

// Receives weatherData from SearchBar component
const JsonBtn = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const openJsonInNewTab = () => {
    // Converts the weatherData object (presumably containing weather information) into a formatted JSON string.
    // null indicates no replacer function is used, and 2 specifies an indentation of 2 spaces for formatting.
    const jsonString = JSON.stringify(weatherData, null, 2);
    // A Blob is created to convert the JSON string into an object that can be used to generate a URL using URL.createObjectURL.
    // The reason for creating a Blob is to convert the JSON data into a format that can be easily opened in a new tab by the browser.
    const blob = new Blob([jsonString], { type: 'application/json' });
    // Creates a DOMString containing a URL representing the specified object (often a Blob or File object). This URL can then be used to reference the object's data
    // "blob:http://example.com/01234567-89ab-cdef-0123-456789abcdef"
    const url = URL.createObjectURL(blob);
    // Open url in new tab
    window.open(url, '_blank');
    // Releases the resources associated with the URL once the tab is closed. This is important for memory management, as it prevents memory leaks.
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
