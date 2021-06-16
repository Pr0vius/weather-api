const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: "/api/v1",
        language: process.env.APIS_LANGUAGE
    },
    log: {
        level: process.env.LOG_LEVEL || "silly",
    },
    swagger: {
        path: "/api/v1/documentation",
    },
    mapbox: {
        path: process.env.MAPBOX_PATH,
        endpoint: process.env.MAPBOX_ENDPOINT,
        apiKey: process.env.MAPBOX_API_KEY,
    },
    owm: {
        path: process.env.OWM_PATH,
        endpoint: process.env.OWM_ENDPOINT,
        apiKey: process.env.OWM_API_KEY,
        units: process.env.OWM_MEASUREMENT,
    },
};
