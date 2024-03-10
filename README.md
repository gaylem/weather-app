# bain-weather-app

This coding challenge is intended to demonstrate self-driven product design decisions and pro-active user-centric thinking, as well as the engineering skills necessary to build and deploy a simple Python-based web app.

## Criteria

- [ ] Develop a simple web app that uses weather data from the public Open Weather API
- [ ] Deploy the app publicly using a free-tier cloud service (Heroku, AWS, GCP)
- [ ] Upload your code to a public GitHub repo for review
- [ ] Be prepared to demo and discuss your application in a Zoom technical interview

## Minimum Features

- [ ] An input form for users to search for a specific city (e.g., "Chicago")
- [ ] A dynamic display of at least the following information (for one or more selected cities):
    - [ ] Current weather from the "Current Weather" endpoint
    - [ ] Current weather icon (using "icon" data point and Weather Icon endpoint)
    - [ ] Latitude and longitude of the selected city
- [ ] A dynamic display of historical weather (e.g., past week) data
    - [ ] Temperature ("temp")
    - [ ] Main weather ("main")
    - [ ] Description of weather ("Description")
- [ ] Allow the user to view the raw API output in a JSON string
- [ ] Allow the user to download the historical weather data in a simple Excel document

## Extra Features

- [ ] Other thoughtful user features or design decisions
- [ ] Features involving data analysis techniques
- [ ] Features involving AI

## Suggested Tech stack

1. Any popular Python framework (FastAPI, Flask)
2. Any popular JavaScript or TypeScript framework (e.g., Svelte, Vue)
3. Feel free to use libraries for styling (Bootstrap, TailwindCSS, daisyUI)

## API Information

1. Sign up for a free API key from OpenWeatherMap.org
2. Utilize the following endpoints

| Name              | Endpoint                                                                                     | Documentation                   |
|-------------------|----------------------------------------------------------------------------------------------|---------------------------------|
| Current Weather   | https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API_key} | https://openweathermap.org/api/one-call-api |
| Historical Weather| https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API_key} | https://openweathermap.org/api/one-call-api |
| Weather Icon      | http://openweathermap.org/img/w/{Icon_ID}.png                                                 | N/A                             |

