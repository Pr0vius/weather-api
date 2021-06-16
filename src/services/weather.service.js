const ErrorResponse = require("../helpers/errorResponse");
const WeatherRepository = require("../repository/weather.repository");
const CityRepository = require("../repository/city.repository");

const weatherRepo = new WeatherRepository();
const cityRepo = new CityRepository();

/**
 * Return a Promise with an object with the weather data by coordinates
 * @param {*} latitude
 * @param {*} longitude
 */
const weatherByCoords = async (latitude, longitude) => {
    const weather = await weatherRepo.findWeather(latitude, longitude);

    return {
        weather: {
            main: weather.weather[0].main,
            description: weather.weather[0].description,
        },
        temperature: weather.main.temp,
        tempMin: weather.main.temp_min,
        tempMax: weather.main.temp_max,
    };
};

findWeatherByCityId = async(city, id) => {
    try {
        const cities = await cityRepo.findCities(city);
        const cityData = cities.features.find(e => id === e.id);

        const lon = cityData.geometry.coordinates[0];
        const lat = cityData.geometry.coordinates[1];
        
        const weatherData = await weatherByCoords(lat, lon)

        return {
            id: cityData.id,
            name : cityData.text,
            lat,
            lon,
            weatherData

        }

    } catch (error) {
        new ErrorResponse(`Error:${error.message}`,400)
    }

}


module.exports = {
    weatherByCoords,
    findWeatherByCityId
};
