export default class AccomplishmentQuerySelector {
  postAccomplishment({ goal, user_id }) {
    return `INSERT INTO ACCOMPLISHMENTS (goal, date, user_id)
            VALUES ('${goal}', CURDATE(), '${user_id}');`;
  }
  getAccomplishments() {
    return `SELECT * FROM ACCOMPLISHMENTS 
            ORDER BY ID DESC
            LIMIT 20`;
  }
 }
