export default class AccomplishmentQuerySelector {
  postAccomplishment({ goal, user_id }) {
    return `INSERT INTO ACCOMPLISHMENTS (goal, date, user_id)
            VALUES ('${goal}', CURDATE(), '${user_id}');`;
  }
  getAccomplishments(id) {
    return `SELECT * FROM ACCOMPLISHMENTS
            WHERE user_id = '${id}' 
            ORDER BY ID DESC;`;
  }
 }
