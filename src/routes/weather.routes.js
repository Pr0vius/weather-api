const { Router } = require("express");
const router = Router();

const {
    coordinatesWeather,
    weatherByCity,
} = require("../controllers/weather.controller");

router.route("/").get(coordinatesWeather);

router.route("/:city/:id").get(weatherByCity);

module.exports = router;
