const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

router.route('/bulk').post(usersController.bulkUsers);

module.exports = router;
