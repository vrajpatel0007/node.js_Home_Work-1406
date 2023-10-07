const express = require("express");
const categoryvalidation = require("../../validations/category.validation")
const categorycontroller = require("../../controllers/category.controller")
// const validate = require("../../middlewares/validate")
const router = express.Router();


/**Post create-category*/
router.post(
  "/create-category",
  categorycontroller.createcategory
)

/** Get category list */
router.get(
  "/list",
  categorycontroller.category_list
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  categorycontroller.category_delete
);
module.exports = router;