import express from 'express';
// import ReviewQueries from './ReviewQueries.js';

const router = express.Router();
// const Review = new ReviewQueries();

router.get('/getReviews/:user_id', async (req,res) {
  try {
    
  } catch (error) {
    console.log('Error in getReviewsforUser route')
    res.status(500).send(error);
  }
});

router.post('/postReview', async (req, res) {
  try {
    
  } catch (error) {
    console.log('Error in postReview route');
    res.status(500).send(error);
  }
});
