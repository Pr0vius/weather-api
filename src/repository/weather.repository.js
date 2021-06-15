const axios = require("axios");
const { owm, api } = require("../config/index");
const ErrorResponse = require("../helpers/errorResponse");

class WeatherRepository{

    constructor(){
        this._language = api.language;
        this._basePath = owm.path;
        this._endpoint = owm.endpoint;
        this._apiKey = owm.apiKey
        this._units = owm.units
    }

    /**
     * 
     * @param {*} lat Latitude
     * @param {*} lon Longitude
     * @returns 
     */
    async findWeather(lat,lon){
        try {

            const instance = axios.create({
                baseURL: `${this._basePath}${this._endpoint}`,
                params: {
                    lat,
                    lon,
                    units: this._units,
                    appid: this._apiKey,
                    lang: this._language
                },
            })
            const response = await instance.get();
            return response.data

        } catch (err) {
            new ErrorResponse(`Couldn't find the coordinates: ${err.message}`, 404)
        }
    }

}

module.exports = WeatherRepository;