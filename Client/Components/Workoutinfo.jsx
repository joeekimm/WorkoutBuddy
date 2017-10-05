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
      question1: '',
      question2: '',
      question3: '',
      count100: 0
    }

    this.handleText1Change = this.handleText1Change.bind(this);
    this.handleText2Change = this.handleText2Change.bind(this);
    this.handleText3Change = this.handleText3Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleText1Change(event) {
    this.setState({
      question1: event.target.value
    }, () => console.log(this.state.question1))
  }

  handleText2Change(event) {
    this.setState({
      question2: event.target.value
    }, () => console.log(this.state.question2))
  }

  handleText3Change(event) {
    this.setState({
      question3: event.target.value
    }, () => console.log(this.state.question3))
  }

  handleSubmit(event) {
    event.preventDefault();
    let total100 = this.state.question1 + ' ' + this.state.question2 + ' ' + this.state.question3;
    console.log(total100);
    const user_id = JSON.parse(localStorage.profile).user_id;
    axios.put('http://localhost:5000/api/users/updatePersonality', {
      text: total100,
      id: user_id
    })
      .then((res) => {
        console.log(res.data)
        this.props.history.push('/dashboard');
      })
  }

  render() {
    // console.log(JSON.parse(localStorage.profile));
    let q1length = this.state.question1.split(' ').length,
        q2length = this.state.question2.split(' ').length,
        q3length = this.state.question3.split(' ').length;
        console.log(q1length);
        console.log(q2length);
        console.log(q3length);

    return (
      <div className='workout-form-wrapper'>
        <Form className='workout-input' onSubmit={(event) => this.handleSubmit(event)}>
          <Form.TextArea onChange={(event) => this.handleText1Change(event)} placeholder='I see myself...' label='What do you see yourself doing in your dream job?' />
          <Form.TextArea onChange={(event) => this.handleText2Change(event)} placeholder='My ideal place would be...' label='Describe the type of place you would choose to live in.' />
          <Form.TextArea onChange={(event) => this.handleText3Change(event)} placeholder='In my free time I like to...' label='What do you do on your free time / what are your hobbies?' />
          <Button disabled={q1length + q2length + q3length < 103} className='workout-form-button' type='submit'>Submit</Button>
          {q1length + q2length + q3length < 103 ? <text>You have {103 - q1length - q2length - q3length} words left!</text> : <text>You hit 100 words!</text>}
        </Form>
      </div>
    );
  }
}
