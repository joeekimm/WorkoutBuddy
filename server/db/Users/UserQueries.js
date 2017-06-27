export default class UserQueries {

  addUser({ id, firstName, lastName, personalityType, preference, schedule, bodySpecs }) {
    return `INSERT INTO USERS 
            VALUES (${id}, ${firstName}, ${lastName}, ${personalityType}, ${preference}, ${schedule}, ${bodySpecs})`
  }

  fetchUserAccAndWorkouts({ id }) {
    return `SELECT * FROM USERS WHERE ID = ${id}
            LEFT OUTER JOIN ACCOMPLISHMENTS ON user_id = ${id}
            LEFT OUTER JOIN WORKOUTS ON user_id = ${id}`
  }

}

// const router = require('express').Router();
// const sequelize = require('sequelize');
// const db = require('../../db/models');

// let queryString = '';

// router.get(`/fetchUser/${req.params.id}`, (req, res) => {
//   queryString = req.params.id
//   sequelize.query(`SELECT * FROM USERS WHERE ID = ${queryString}`)
//     .then(data => { res.send(data) })
//     .catch(err => console.log('Error in fetching User info ', err));
// });

// router.post('/postUser', (req, res) => {

//   sequelize.query(`INSERT INTO USERS ('id', 'firstName', 'lastName', 'personalityType', 'preference') VALUES ()`)
// })

// modules.export = router;