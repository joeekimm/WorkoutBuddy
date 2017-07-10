import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'

// Questions for personality test:
  // What do you see yourself doing in your dream job?
  // Describe the type of place you would choose to live in
  // What do you do on your free time / hobbies?

export default class Workoutinfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ibmtext: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleTextChange(event) {
    this.setState({
      ibmtext: event.target.value
    }, console.log(this.state.ibmtext))
  }

  handleSubmit(event) {
    event.preventDefault();
    const user_id = JSON.parse(localStorage.profile).user_id;
    axios.put('http://localhost:5000/api/users/updatePersonality', {
      text: this.state.ibmtext,
      id: user_id
    })
      .then((res) => console.log(res.data))
  }

  render() {
    // console.log(JSON.parse(localStorage.profile).user_id);
    return(
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <Form.TextArea onChange={(event) => this.handleTextChange(event)} label='Question 1' placeholder='What do you see yourself doing in your dream job?' />
        {/*<Textarea label="Textarea" floatingLabel={true} defaultValue="Value on load" />*/}
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
