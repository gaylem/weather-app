import React from 'react';
import * as XLSX from 'xlsx';

// Receives weatherData from SearchBar component
const ExcelBtn = ({ weatherData }) => {
  const downloadExcel = () => {
    // Flatten data
    //! Removed index 0
    //! Cleaned up fields
    const flattenedData = weatherData.flatMap(cityData =>
      cityData.historical_weather.flatMap(histWeather =>
        histWeather.data.map(day => ({
          city: cityData.current_weather.name,
          country: cityData.current_weather.sys.country,
          date: new Date(day.dt * 1000).toLocaleDateString(),
          dewPoint: day.dew_point,
          feelsLike: day.feels_like,
          humidity: day.humidity,
          pressure: day.pressure,
          sunrise: new Date(day.sunrise * 1000).toLocaleString(),
          sunset: new Date(day.sunset * 1000).toLocaleString(),
          temperature: day.temp,
          uvi: day.uvi,
          visibility: day.visibility,
          description: day.weather[0].description,
          main: day.weather[0].main,
          windSpeed: day.wind_speed,
          windDeg: day.wind_deg,
          lat: histWeather.lat,
          lon: histWeather.lon,
          timezone: histWeather.timezone,
          timezoneOffset: histWeather.timezone_offset,
        })),
      ),
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
    <div className='p-1 md:p-2 lg:p-5'>
      <button onClick={downloadExcel} className='btn-primary'>
        Download Past Data to Excel
      </button>
    </div>
  );
};

export default ExcelBtn;
