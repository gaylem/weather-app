# weather-app

This coding challenge is intended to demonstrate self-driven product design decisions and pro-active user-centric thinking, as well as the engineering skills necessary to build and deploy a simple Python-based web app.

View the completed weather app [here](https://bain-weather-app-1bb2d43eb419.herokuapp.com/).

## Criteria

- [x] Develop a simple web app that uses weather data from the public Open Weather API
- [x] Deploy the app publicly using a free-tier cloud service (Heroku, AWS, GCP) **=> I used Heroku**
- [x] Upload your code to a public GitHub repo for review
- [x] Be prepared to demo and discuss your application in a Zoom technical interview

## Minimum Features

- [x] An input form for users to search for a specific city (e.g., "Chicago")
- [x] A dynamic display of at least the following information (for one or more selected cities):
  - [x] Current weather from the "Current Weather" endpoint
  - [x] Current weather icon (using "icon" data point and Weather Icon endpoint)
  - [x] Latitude and longitude of the selected city
- [x] A dynamic display of historical weather (e.g., past week) data
  - [x] Temperature ("temp")
  - [x] Main weather ("main")
  - [x] Description of weather ("Description")
- [x] Allow the user to view the raw API output in a JSON string
- [x] Allow the user to download the historical weather data in a simple Excel document

## UI Mock-Up

<div>I used Excalidraw to mock up a quick UI design. I made some changes along the way but this was my initial concept.</div>
<img width="596" alt="Screenshot 2024-03-11 at 11 59 19 AM" src="https://github.com/gaylem/weather-app/assets/76500899/b70780e1-3bdc-411a-8d24-1d0ad2176f99">

## Extra Features

- [ ] Other thoughtful user features or design decisions
- [ ] Features involving data analysis techniques
- [ ] Features involving AI

## Suggested Tech stack

1. Any popular Python framework (FastAPI, Flask) **=> I used Flask**
2. Any popular JavaScript or TypeScript framework (e.g., Svelte, Vue) **=> I used React**
3. Feel free to use libraries for styling (Bootstrap, TailwindCSS, daisyUI) **=> I used Tailwind**

## API Information

1. Sign up for a free API key from OpenWeatherMap.org
2. Utilize the following endpoints

| Name               | Endpoint                                                                                                  | Documentation                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Current Weather    | https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API_key}        | https://openweathermap.org/api/one-call-api |
| Historical Weather | https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API_key} | https://openweathermap.org/api/one-call-api |
| Weather Icon       | http://openweathermap.org/img/w/{Icon_ID}.png                                                             | N/A                                         |
