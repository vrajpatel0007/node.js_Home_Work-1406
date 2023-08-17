const express = require("express");
const userRoute = require("./user.route");
const categoryroute = require("./category.route")

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryroute)

module.exports = router;