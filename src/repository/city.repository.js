const axios = require("axios");
const { mapbox,api } = require("../config/index");
const ErrorResponse = require("../helpers/errorResponse");

class CityRepository {
    constructor() {
        this._limit = 10;
        this._language = api.language ;
        this._basePath = mapbox.path;
        this._endpoint = mapbox.endpoint;
        this._apiKey = mapbox.apiKey;
    }
    /**
     * Return a json with the cities data
     * @param {String} city
     * @returns
     */
    async findCities(city) {
        try {
            const instance = axios.create({
                baseURL: `${this._basePath}${this._endpoint}/${city}.json`,
                params: {
                    access_token: this._apiKey,
                    limit: this._limit,
                    language: this._language,
                },
            });
            const response = await instance.get();
            return response.data;
        } catch (err) {
            new ErrorResponse(
                `Couldn't find the city list: ${err.message}`,
                404
            );
        }
    }
}

module.exports = CityRepository;
