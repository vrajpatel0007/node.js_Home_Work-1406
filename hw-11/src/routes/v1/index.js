const express = require("express");
const userRoute = require("./user.route");
const categoryroute = require("./category.route")
const hotelRoute = require("./hotel.route");
const busRoute = require("./bus.route");
const schoolRoute = require("./school.route");
const travelRoute = require("./travel.route");
const jewelleryRoute = require("./jewellery.route");
const stationaryRoute = require("./stationary.route");
const movieRoute = require("./movie.route");
const pharmacyRoute = require("./pharmacy.route");
const musicRoute = require("./music.route");
const groceryRoute = require("./grocery.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryroute)
router.use("/hotel", hotelRoute);
router.use("/bus", busRoute);
router.use("/school", schoolRoute);
router.use("/travel", travelRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/stationary", stationaryRoute);
router.use("/movie", movieRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/music", musicRoute);
router.use("/grocery", groceryRoute);

module.exports = router;