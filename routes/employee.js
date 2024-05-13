var express = require('express');

const employee = express.Router();

var userController = require('../src/employee/employeecontroller');

employee.route('/employee/getAll').get(userController.getDataConntrollerfn);

employee.route('/employee/create').post(userController.createUserControllerFn);

employee.route('/employee/update/:id').patch(userController.updateUserController);

employee.route('/employee/delete/:id').delete(userController.deleteUserController);

module.exports = employee;