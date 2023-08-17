const express = require("express");
const uservalidation = require("../../validations/user.validtion")
const usercontroller = require("../../controllers/user.controller")
const validate = require("../../middlewares/validate")
const router = express.Router();


/**Get user list*/
router.get(
  "/list",
  validate(uservalidation.createuser),
  usercontroller.createUser
)
module.exports = router;