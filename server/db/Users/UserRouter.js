// const router = require('express').Router();
import express from 'express';

import UserQueries from './UserQueries';

import PersonalityInsightsV3  from 'watson-developer-cloud/personality-insights/v3';
// const UserQueries = require('./UserQueries');
const router = express.Router();
const User = new UserQueries();
let result;

router.get('/getUser/:id', async (req, res) => {
  try {
    result = await User.fetchOneUserInfo(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the fetchOneUserInfo route: ', error);
    res.status(500).send(error);
  }
});

router.get('/nearbyUsers/:location', async (req, res) => {
  try {
    const lat = Number(req.params.location);
    result = await User.fetchNearbyUsers(lat);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in finding nearbyUsers');
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    result = await User.addUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in the addUser route  ,', error);
    res.status(500).send(error);
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

router.put('/updatePersonality', async (req, res) => {
  console.log('this is req.body: ', req.body);
  let body;
  try {
    const personality_insights = new PersonalityInsightsV3({
      username: '80ab8395-6efc-4188-a88a-c58f30353f10',
      password: 'DwOUcTYNy0yZ',
      version_date: '2016-10-19'
    });

    personality_insights.profile({
      text: req.body.text,
      consumption_preferences: true
      },
      (err, response) => {
        if (err) {
          console.log('error:', err);
        } else {
          let personalityResults = {};
          response.personality.forEach((elem) => {
            personalityResults[elem.name] = elem.percentile;
          });
          personalityResults = JSON.stringify(personalityResults);
          body = { personalityType: personalityResults, id: req.body.id };
          console.log('this is body: ', body);

          result = User.updateUser(body);
          res.status(200).send(result);
        }
    });
  } catch (error) {
    console.log('Error in the updatePersonality route', error);
    res.status(500).send(error);
  }
})

module.exports = router;
