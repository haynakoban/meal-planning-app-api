const express = require('express');
const router = express.Router();
const { recipesController } = require('../controllers');

router.route('/bulk').post(recipesController.bulkRecipes);

module.exports = router;
