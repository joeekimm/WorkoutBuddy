import React, { Component } from 'react';
import axios from 'axios';
import AccomplishmentEntry from '../Components/AccomplishmentEntry';


class AccomplishmentsList extends Component {
  constructor() {
    super();
    this.state = {
      accomplishments: [],
      post: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.postAccomplishment = this.postAccomplishment.bind(this);
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
  handleTextChange(e) {
    this.setState({ post: e.target.value });
  }
  postAccomplishment(e) {
    e.preventDefault();
    const body = {
      user_id: JSON.parse(localStorage.getItem('profile')).user_id,
      goal: this.state.post,
    };
    axios.post('/api/accomplishments/postAccomplishment', body)
      .then(() => {
        axios.get('/api/accomplishments/getAccomplishments')
          .then((res) => {
          console.log(res);
            this.setState({ accomplishments: res.data[0] });
          })
          .catch((err) => {
            console.log('there was an error fetching messages ,', err);
          });
      })
      .catch((err) => {
        console.log('theres an error posting the accomplishment ,', err);
      });
  }
  render() {
    console.log(this.state.post);
    return (
      <div className="accomplishments-holder">
        <form onSubmit={(e) => { this.postAccomplishment(e); }} className="post-feed">
          <h3>what'd you accomplish today?</h3>
          <textarea onChange={(e) => { this.handleTextChange(e); }} type="text" placeholder="tell us what you achieved?" />
          <button type="submit">POST</button>
        </form>
        {this.state.accomplishments.map(accomplishment => <AccomplishmentEntry accomplishment={accomplishment} />)}
      </div>
    );
  }
}

export default AccomplishmentsList;
