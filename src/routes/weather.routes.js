const { Router } = require("express");
const router = Router();

const { cities } = require("../controllers/weather.controller");

router.route("/:city").get( cities );

module.exports = router;
