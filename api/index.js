const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/topics', require('./topics'));
router.use('/messages', require('./messages'));

module.exports = router;