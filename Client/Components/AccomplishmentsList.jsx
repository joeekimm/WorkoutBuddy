import React, { Component } from 'react';
import axios from 'axios';
import AccomplishmentEntry from '../Components/AccomplishmentEntry';


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
        this.setState({ accomplishments: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="content-holder">
        accomplishments list
        {this.state.accomplishments.map(accomplishment => <AccomplishmentEntry accomplishment={accomplishment} />)}
      </div>
    );
  }
}

export default AccomplishmentsList;
