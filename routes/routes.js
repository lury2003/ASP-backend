var express = require('express');
// var otp =require("./otp/otpController");
var a_loginController = require('../src/admin_login/a_loginController');
const router = express.Router();

router.route('/admin/login').post(a_loginController.loginUserControllerFn);
router.route('/admin/create').post(a_loginController.createUserControllerFn);
router.route('/admin/update').post(a_loginController.passwordControllerFn);
router.route('/admin/update1').post(a_loginController.productdata);
router.route('/admin/get').post(a_loginController.getdatacontrol);
// router.route('/admin/sendlink').post(a_loginController.sendotp);
module.exports = router;