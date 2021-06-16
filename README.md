# Node Weather API

## General
This basic API allows you to get a city coordinates, get the coordinate's weather and get the weather of an specific city.
    
Dependencies:
* NodeJs
* Express
* Axios
* Cors

Third party APIs used: 
* Mapbox : https://www.mapbox.com/
* OpenWeatherMap: https://openweathermap.org/

## Documentation
For more detailed documentation u can visit https://provius-weather.herokuapp.com/api/v1/documentation/#/Misc/CityListByPath or use the /api/v1/documentation path on localhost

## Usage
For usage u need install the dependecies, change the **env.example** to **.env** and complete the env variables 

## EndPoints
 * **/api/v1/cities/:city** - This method gives a JSON object with the "status" of the operation and another object with the city list data. You must search the city name by the Path Parameter and the API will return a list of 10 location's data.
 
 * **/api/v1/weather?lat={latitude}lon={longitude}** - This method need two query parameters lat and lon, and returns the weather data of the location
 
 * **/api/v1/weather/:city/:id** This method need 2 path param, the first is the city you want to search, and the second one is the id of the city, you can get this data from /api/v1/cities/:city these must match to give the specific data from the city's weather.

All the feedback is well received. Ty
