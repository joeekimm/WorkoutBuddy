export default class FriendQuerySelector {
  grabFriends(id) {
    return `SELECT * FROM FRIENDS
            LEFT JOIN USERS 
            WHERE user_id = '${id}';`;
  }
  postFriend({ user_id, friend_id }) {
    return `INSERT INTO FRIENDS (user_id, friend_id)
            VALUES ('${user_id}', '${friend_id}');`;
  }
}

