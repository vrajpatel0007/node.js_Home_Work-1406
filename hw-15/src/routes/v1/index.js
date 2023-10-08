const express = require("express");
const userRoute = require("./user.route");
const categoryroute = require("./category.route")
const tokenRoutes = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryroute)
router.use("/token", tokenRoutes);

module.exports = router;