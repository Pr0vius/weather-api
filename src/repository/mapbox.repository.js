const axios = require("axios");
const { mapbox } = require("../config/index");
const ErrorResponse = require("../helpers/errorResponse");

class CityRepository {
    constructor() {
        this.limit = 10;
        this.language = "en";
        this.basePath = mapbox.path;
        this.endpoint = mapbox.endpoint;
        this.apiKey = mapbox.apiKey;
    }
    /**
     * Return a json with the cities data
     * @param {String} city
     * @returns
     */
    async findCities(city) {
        try {
            const instance = axios.create({
                baseURL: `${mapbox.path}${mapbox.endpoint}/${city}.json`,
                params: {
                    access_token: mapbox.apiKey,
                    limit: this.limit,
                    language: this.language,
                },
            });
            const response = await instance.get();
            return response.data;
            
        } catch (err) {
            new ErrorResponse("Couldn't find the city list", 404)
        }
    }
}

module.exports = CityRepository;
