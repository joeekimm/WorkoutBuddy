export default class WorkoutQueries {

  fetchWorkoutsForUser({ user_id }) {
    return `SELECT * FROM WORKOUTS WHERE USER_ID = ${user_id}`
  }
}