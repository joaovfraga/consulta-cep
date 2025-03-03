const express = require('express');
const router = express.Router();
const cepController = require('../controllers/cepController');

router.get('/:userId', cepController.getUserHistory);

module.exports = router;