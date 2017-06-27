const router = require('express').Router();
const User = require('../db/config').User;


router.post('/', (req, res) => {
  console.log('we hit the correct route , and heres the body :)', req.body);
  User.findOrCreate({ where: { 
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    personalityType: req.body.personalityType, 
    preference: req.body.preference,
  }})
    .spread((user,created) => {
      if(created) {
        res.status(200).send('user was created');
      } else {
        res.status(200).send('user already exists');
      }
    })
    .catch((err) => {
      console.log('error trying to spread find or create results for user on post route , ', err);
    });
});


module.exports = router;