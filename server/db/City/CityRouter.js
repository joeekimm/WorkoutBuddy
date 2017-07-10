import express from 'express';
import CityQueries from './CityQueries';

const router = express.Router();
const Cities = new CityQueries();

router.get('/getCities', async (req, res) => {
  console.log('we got to get cities')
  try {
    const result = await Cities.getCities();
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getCities route ,', error);
    res.status(500).send(error);
  }
})

module.exports = router;
