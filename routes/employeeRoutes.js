const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authenticateToken = require('../middleware/auth');

router.get('/empleados', authenticateToken, employeeController.getAllEmployes);

module.exports = router;