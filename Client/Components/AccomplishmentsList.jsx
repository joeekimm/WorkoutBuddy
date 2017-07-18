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
      <div className="accomplishments-holder">
        <form className="post-feed">
          <h2>what'd you accomplish today?</h2>
          <textarea type="text" placeholder="tell us what you achieved?" />
        </form>
        {this.state.accomplishments.map(accomplishment => <AccomplishmentEntry accomplishment={accomplishment} />)}
      </div>
    );
  }
}

export default AccomplishmentsList;
