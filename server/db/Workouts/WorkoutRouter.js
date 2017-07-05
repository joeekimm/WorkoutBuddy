import express from 'express';
import WorkoutQueries from './WorkoutQueries';

const router = express.Router();
const Workout = new WorkoutQueries();
let result;

router.get('/getWorkouts/:user_id', async (req, res) => {
  try {
    result = Workout.fetchWorkouts(req.params.user_id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getWorkoutsForUser route');
    res.status(500).send(error);
  }
});

router.post('/addWorkout', async (req, res) => {
  try {
    result = Workout.addWorkout(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in addWorkout route');
    res.status(500).send(error);
  }
});

router.put('/updateWorkout', async (req, res) => {
  try {
    result = Workout.updateWorkout(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in updateWorkout route');
    res.status(500).send(error);
  }
});

router.put('/increaseScoreForWorkout/:id', async (req, res) => {
  try {
    result = Workout.increaseScoreForWorkout(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in increaseScoreForWorkout route');
    res.status(500).send(error);
  }
});

router.delete('/deleteWorkout/:id', async (req, res) => {
  try {
    result = Workout.removeWorkout(req.params.id);
    res.status(200).send('Workout deleted!');
  } catch (error) {
    console.log('Error in removeWorkout route');
    res.status(500).send(error);
  }
});

module.exports = router;
