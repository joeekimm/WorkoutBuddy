// const router = require('express').Router();
import express from 'express';

import UserQueries from './UserQueries';
// const UserQueries = require('./UserQueries');
const router = express.Router();
const User = new UserQueries();

router.get('/:id', async (req, res) => {
  try {
    const result = await User.fetchOneUserInfo(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the fetchOneUserInfo route');
    res.status(500).send(error);
  }
});

module.exports = router;
