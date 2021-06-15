const express = require("express");
const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");
const { weatherByCoords } = require("../services/weather.service");

/**
 *
 * @param {express.Request} Request
 * @param {express.Response} Response
 * @param {express.NextFunction} Next
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
