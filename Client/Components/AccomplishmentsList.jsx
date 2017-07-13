import React, { Component } from 'react';
import axios from 'axios';


class AccomplishmentsList extends Component {
  constructor() {
    super();
    this.state = {
      accomplishments: [],
    };
  }
  componentDidMount() {
    axios.get('/api/accomplishments/getAccomplishments')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>accomplishments list</div>
    );
  }
}

export default AccomplishmentsList;
