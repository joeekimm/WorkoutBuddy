import FriendQuerySelector from './FriendQuerySelector';
import db from '../';

export default class Friends extends FriendQuerySelector {
  constructor() {
    super();
  }
  async grabFriends() {
    const queryString = super.grabFriends();
    const friends = await db.query(queryString);
    return friends;
  }
  async postFriend(body) {
    const queryString = super.postFriend(body);
    const friends = await db.query(queryString);
    return friends;
  }
}
