import React from 'react';
import * as XLSX from 'xlsx';

const ExcelBtn = ({ weatherData }) => {
  const downloadExcel = () => {
    // Flatten data
    const flattenedData = weatherData.flatMap(cityData =>
      cityData.historical_weather.map(weather => ({
        city: cityData.current_weather.name,
        country: cityData.current_weather.sys.country,
        date: new Date(weather.data[0].dt * 1000).toLocaleDateString(),
        temperature: weather.data[0].temp,
        humidity: weather.data[0].humidity,
        pressure: weather.data[0].pressure,
        weatherDescription: weather.data[0].weather[0].description,
        windSpeed: weather.data[0].wind_speed,
        clouds: weather.data[0].clouds,
        dewPoint: weather.data[0].dew_point,
        sunrise: new Date(weather.data[0].sunrise * 1000).toLocaleString(),
        sunset: new Date(weather.data[0].sunset * 1000).toLocaleString(),
        visibility: weather.data[0].visibility,
        uvi: weather.data[0].uvi,
        windDeg: weather.data[0].wind_deg,
        windGust: weather.data[0].wind_gust,
        timezone: weather.timezone,
        timezoneOffset: weather.timezone_offset,
      })),
    );

    // Convert to Excel sheet
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'WeatherData');

    // Download Excel file
    XLSX.writeFile(workbook, 'weather_data.xlsx');
  };

  return (
    <div className='container mx-auto flex flex-col divide-solid p-10'>
      <button onClick={downloadExcel} className='text-white bg-sky-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-cyan-500 dark:focus:ring-sky-800'>
        Download Past Data to Excel
      </button>
    </div>
  );
};

export default ExcelBtn;
