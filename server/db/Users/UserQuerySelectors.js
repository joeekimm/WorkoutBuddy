export default class UserQuerySelector {

  postUser({ id }) {
    return `INSERT INTO USERS (id)
            VALUES ('${id}');`;
  }

  getUser(id) {
    return `SELECT DISTINCT * FROM USERS WHERE id = ${id}`;
  }

  getUserAccAndWorkouts(id) {
    return `SELECT * FROM USERS WHERE id = ${id}
            LEFT OUTER JOIN ACCOMPLISHMENTS ON user_id = ${id}
            LEFT OUTER JOIN WORKOUTS ON user_id = ${id}`;
  }

  putUserInfo({ id, firstName, lastName, personalityType, preference, schedule, bodySpecs }) {
    return `UPDATE USERS 
            SET firstName = '${firstName}',
            lastName = '${lastName}',
            personalityType = '${personalityType}',
            preference = '${preference}',
            schedule = '${schedule}',
            bodySpecs = '${bodySpecs}'
            WHERE id = ${id}`;
  }

  deleteUser(id) {
    return `DELETE FROM USERS WHERE id = ${id}`;
  }

  findNearbyUsers(lat) {
    return `SELECT * FROM USERS WHERE lat > ${lat}
             && lat < ${lat + 0.01} `;
  }
}
