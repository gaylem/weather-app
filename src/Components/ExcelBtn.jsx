import React from 'react';
import * as XLSX from 'xlsx';

const ExcelBtn = ({ weatherData }) => {
  const downloadExcel = () => {
    // Flatten the nested structure and select relevant fields
    const flattenedData = weatherData.map(cityData => ({
      city: cityData.current_weather.name,
      country: cityData.current_weather.sys.country,
      temperature: cityData.current_weather.main.temp,
      humidity: cityData.current_weather.main.humidity,
      pressure: cityData.current_weather.main.pressure,
      weatherDescription: cityData.current_weather.weather[0].description,
      windSpeed: cityData.current_weather.wind.speed,
    }));

    // Convert the flattened data to an Excel sheet
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'WeatherData');

    // Download the Excel file
    XLSX.writeFile(workbook, 'weather_data.xlsx');
  };

  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <button onClick={downloadExcel} className='text-blue-500 underline hover:text-blue-700'>
        Download Excel
      </button>
    </div>
  );
};

export default ExcelBtn;
