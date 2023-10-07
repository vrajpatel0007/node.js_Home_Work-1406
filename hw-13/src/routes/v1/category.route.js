const express = require("express");
const categoryvalidation = require("../../validations/category.validation")
const categorycontroller = require("../../controllers/category.controller")
const validate = require("../../middlewares/validate")
const router = express.Router();


/**Get category list*/
router.get(
  "/list",
  validate(categoryvalidation.createcategory),
  categorycontroller.createcategory
)
module.exports = router;