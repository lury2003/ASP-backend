var express = require('express');

const product = express.Router();

var productContloer = require("../src/products/productscontlorer");

product.route('/product/getAll').get(productContloer.getDataConntrollerproduct);
product.route('/product/create').post(productContloer.createproductControllerFn);
product.route('/product/update/:id').patch(productContloer.updateproductController);
product.route('/product/delete/:id').delete(productContloer.deleteproductController);
product.route('/product/get').post(productContloer.productdata1);
module.exports = product;





// var express = require('express');

// const employee = express.Router();

// var userController = require('../src/employee/employeecontroller');

// employee.route('/employee/getAll').get(userController.getDataConntrollerfn);

// employee.route('/employee/create').post(userController.createUserControllerFn);

// employee.route('/employee/update/:id').patch(userController.updateUserController);

// employee.route('/employee/delete/:id').delete(userController.deleteUserController);

// module.exports = employee;