const router = require('express').Router();

router.use('/users', require('../db/Users/UserRouter'));
// router.use('/workouts', require('../db/Workout/WorkoutRouter'));
// router.use('/users', require('./Users'));

module.exports = router;
