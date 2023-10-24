const express = require('express');
const router = express.Router();
const { feedbacksController } = require('../controllers');

router.route('/bulk').post(feedbacksController.bulkFeedbacks);

module.exports = router;
