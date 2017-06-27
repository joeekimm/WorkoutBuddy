export default class UserQueries {

  addUser({ id, firstName, lastName, personalityType, preference, schedule, bodySpecs }) {
    return `INSERT INTO USERS 
            VALUES (${id}, ${firstName}, ${lastName}, ${personalityType}, ${preference}, ${schedule}, ${bodySpecs})`
  }

  fetchUser({ id }) {
    return `SELECT * FROM USERS WHERE id = ${id}`
  }

  fetchUserAccAndWorkouts({ id }) {
    return `SELECT * FROM USERS WHERE id = ${id}
            LEFT OUTER JOIN ACCOMPLISHMENTS ON user_id = ${id}
            LEFT OUTER JOIN WORKOUTS ON user_id = ${id}`
  }

  updateUserInfo({ id, firstName, lastName, personalityType, preference, schedule, bodySpecs }) {
    return `UPDATE USERS 
            SET firstName = ${firstName},
            lastName = ${lastName},
            personalityType = ${personalityType},
            preference = ${preference},
            schedule = ${schedule},
            bodySpecs = ${bodySpecs}
            WHERE id = ${id}`
  }

  deleteUser({ id }) {
    return `DELETE FROM USERS WHERE id = ${id}`
  }

}
