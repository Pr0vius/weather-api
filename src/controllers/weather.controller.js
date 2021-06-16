const express = require("express");
const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");
const { weatherByCoords, findWeatherByCityId } = require("../services/weather.service");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.coordinatesWeather = async (req, res, next) => {
    try {
        const {lat, lon} = req.query

        res.json(
            new Success(
                await weatherByCoords(lat,lon),
                200
            )
        );
    } catch (err) {
        next(new ErrorResponse(`Error: ${err.message}`, 404));
    }
};
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.weatherByCity = async (req, res, next) => {
    try {
        const { city, id } = req.params
        
        res.json(new Success(
            await findWeatherByCityId(city,id),
            200 
            )
        )

    } catch (err) {
        next(new ErrorResponse(`Error: ${err.message}`, 400))
    }
};
