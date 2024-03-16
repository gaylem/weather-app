//! Created separate utility function

const kelvinToFahrenheit = k => {
  const f = ((k - 273.15) * 9) / 5 + 32;
  return f.toFixed(2);
};

export { kelvinToFahrenheit };
