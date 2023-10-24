const express = require('express');
const router = express.Router();
const { mealsController } = require('../controllers');

router.route('/bulk').post(mealsController.bulkMeals);
router.route('/types/bulk').post(mealsController.bulkMealTypes);

module.exports = router;
