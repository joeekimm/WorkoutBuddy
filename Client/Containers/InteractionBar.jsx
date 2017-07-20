import React, { Component } from 'react';
import { connect } from 'react-redux';

class InteractionBar extends Component {
  constructor(props) {
    super(props);
  }
  // addFriend() {
  //
  // }
  // messagePerson() {
  //
  // }
  render() {
    return (
      <div className="interaction-bar">
        <div>
          <i className="fa fa-thumbs-o-up" aria-hidden="true" />
          <button>Connect</button>
        </div>
        <div>
          <i className="fa fa-comments-o" aria-hidden="true" />
          <button>Message</button>
        </div>
      </div>
    );
  }
}

export default InteractionBar;
