const WeatherRepository = require("../repository/weather.repository");
const weatherRepo = new WeatherRepository();

/**
 * Return an object with de weather data by coordinates
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

module.exports = {
    weatherByCoords,
};
