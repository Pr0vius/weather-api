const { Router } = require("express");
const router = Router();

const { cities, coordinatesWeather } = require("../controllers/weather.controller");

router.route("/city/:city").get( cities );

router.route("/").get( coordinatesWeather );

module.exports = router;
