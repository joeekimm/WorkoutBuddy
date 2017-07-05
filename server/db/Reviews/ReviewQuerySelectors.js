export default class ReviewQuerySelector {

  getReviews(id) {
    return `SELECT * FROM REVIEWS WHERE sender_id = ${id} OR receiver_id = ${id}`;
  }

  postReviews(id, sender_id, receiver_id) {
    return `INSERT INTO REVIEWS ()`
  }
}