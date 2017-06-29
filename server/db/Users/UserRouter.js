const router = require('express').Router();

const UserQueries = require('./UserQueries');

const User = new UserQueries();

router.get('/', async (req, res) => {
  try {
    const result = await User.fetchOneUserInfo(req.body.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the fetchOneUserInfo route');
    res.status(500).send(error);
  }
});

module.exports = router;
