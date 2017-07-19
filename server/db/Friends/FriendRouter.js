import express from 'express';
import FriendQueries from './FriendQueries';

const router = express.Router();
const Friends = new FriendQueries();


router.get('/grabFriends', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Friends.grabFriends(id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in grabFriends route ,', error);
    res.status(500).send(error);
  }
});

router.post('/postFriend', async (req, res) => {
  console.log('we got here at least bruh');
  try {
    const result = await Friends.postFriend(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in postFriend route ,', error);
    res.status(500).send(error);
  }
});

module.exports = router;

