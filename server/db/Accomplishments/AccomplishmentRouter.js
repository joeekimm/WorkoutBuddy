import express from 'express';
import AccomplishmentQueries from './AccomplishmentQueries';

const router = express.Router();
const Accomplishments = new AccomplishmentQueries();

router.get('/getAccomplishments/:id', async (req, res) => {
  try {
    console.log('accomplishments id  ,', req.params);
    const result = await Accomplishments.getAccomplishments(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getAccomplishments route ,', error);
    res.status(500).send(error);
  }
})

router.post('/postAccomplishment', async (req, res) => {
  try {
    const result = await Accomplishments.postAccomplishment(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getAccomplishments route ,', error);
    res.status(500).send(error);
  }
});

module.exports = router;
