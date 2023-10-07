const express = require("express");
const userRoute = require("./user.route");
const categoryroute = require("./category.route")
const product = require("./product.route")

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryroute)
router.use("/product", product)
module.exports = router;