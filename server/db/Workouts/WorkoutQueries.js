import WorkoutQuerySelector from './WorkoutQuerySelectors';
import db from '../';

export default class WorkoutQueries extends WorkoutQuerySelector {
  constructor() {
    super();
  }

  fetchWorkouts(user_id) {
    const queryString = super.getWorkoutsForUser(user_id);
    return db.query(queryString);
  }

  addWorkout(id, routine, focus, type, user_id) {
    const queryString = super.postWorkout(id, routine, focus, type, user_id);
    return db.query(queryString);
  }

  updateWorkout(id, routine, focus, type) {
    const queryString = super.putWorkout(id, routine, focus, type);
    return db.query(queryString);
  }

  removeWorkout(id) {
    const queryString = super.deleteWorkout(id);
    return db.query(queryString);
  }

  increaseScore(id) {
    const queryString = super.increaseScoreForWorkout(id);
    return db.query(queryString);
  }
}
