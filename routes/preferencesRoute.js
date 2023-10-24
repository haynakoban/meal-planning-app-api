const express = require('express');
const router = express.Router();
const { preferencesController } = require('../controllers');

router.route('/bulk').post(preferencesController.bulkPreferences);

module.exports = router;
