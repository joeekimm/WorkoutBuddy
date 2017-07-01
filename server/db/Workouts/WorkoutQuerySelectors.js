export default class WorkoutQueries {

  getWorkoutsForUser(user_id) {
    return `SELECT * FROM WORKOUTS WHERE USER_ID = ${user_id}`;
  }

  postWorkout(id, routine, focus, type, user_id) {
    return `INSERT INTO WORKOUT
            VALUES (${id}, ${routine}, ${focus}, ${type}, ${user_id})`;
  }

  putWorkout(id, routine, focus, type) {
    return `UPDATE WORKOUT
            SET id = ${id}, routine = ${routine}, focus = ${focus}, type = ${type}
            WHERE id = ${id}`;
  }

  increaseScoreForWorkout(id, score) {
    return `UPDATE WORKOUT
            SET score = ${score + 10}
            WHERE id = ${id}`;
  }

  deleteWorkout(id) {
    return `DELETE WORKOUT WHERE id = ${id}`;
  }

}
