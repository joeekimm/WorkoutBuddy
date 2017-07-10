// const router = require('express').Router();
import express from 'express';

import UserQueries from './UserQueries';
// const UserQueries = require('./UserQueries');
const router = express.Router();
const User = new UserQueries();
let result;

router.get('/getUser/:id', async (req, res) => {
  try {
    result = await User.fetchOneUserInfo(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the fetchOneUserInfo route');
    res.status(500).send(error);
  }
});

router.get('/nearbyUsers/:location', async (req, res) => {
  try {
    const lat = Number(req.params.location);
    console.log(lat);
    result = await User.fetchNearbyUsers(lat);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in finding nearbyUsers');
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('this is the req.body', req.body);
    result = await User.addUser(req.body);
    res.status(200).send('user was created');
  } catch (error) {
    console.log('user already exists  ', error);
    res.status(200).send('user already exists');
  }
});

router.delete('/deleteUser/:id', async (req, res) => {
  try {
    result = await User.removeUser(req.params.id);
    res.status(200).send('User has been deleted!');
  } catch (error) {
    console.log('Error in the removeUser route');
    res.status(500).send(error);
  }
});

router.put('/updateUser', async (req, res) => {
  try {
    result = await User.updateUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the updateUser route');
    res.status(500).send(error);
  }
});

module.exports = router;
