const express = require('express');
const router = express.Router();

const { cuisinesController } = require('../controllers');

router.route('/bulk').post(cuisinesController.bulkCuisines);

module.exports = router;
