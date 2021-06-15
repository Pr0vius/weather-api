const { Router } = require("express");
const router = Router();

const { coordinatesWeather } = require("../controllers/weather.controller");

router.route("/").get( coordinatesWeather );

module.exports = router;
