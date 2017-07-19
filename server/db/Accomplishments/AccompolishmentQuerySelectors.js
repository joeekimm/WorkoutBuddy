export default class AccomplishmentQuerySelector {
  postAccomplishment({ goal, user_id }) {
    return `INSERT INTO ACCOMPLISHMENTS (goal, date, user_id)
            VALUES ('${goal}', CURDATE(), '${user_id}');`;
  }
  getAccomplishments() {
    return `SELECT Users.id, Users.firstName, Users.lastName, Users.picture, Accomplishments.goal, Accomplishments.date
            FROM Users
            LEFT JOIN Accomplishments
            ON Users.id = Accomplishments.user_id
            ORDER BY Accomplishments.id DESC
            LIMIT 20`;
  }
 }
