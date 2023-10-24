const express = require('express');
const router = express.Router();
const { ingredientsController } = require('../controllers');

router.route('/bulk').post(ingredientsController.bulkIngredients);

module.exports = router;
