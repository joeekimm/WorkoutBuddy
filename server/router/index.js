const router = require('express').Router();

router.use('/users', require('../db/Users/UserRouter'));

module.exports = router;
