import React, { Component } from 'react';
// import PersonalityInsightsV3 from 'watson-developer-cloud/personality-insights/v3';

// const personality_insights = new PersonalityInsightsV3({
//   username: "80ab8395-6efc-4188-a88a-c58f30353f10",
//   password: "DwOUcTYNy0yZ",
//   version_date: '2016-10-19'
// });


class Workoutinfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ibmtext: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(event) {
    this.setState({
      ibmtext: event.target.value
    }, console.log(this.state.ibmtext))
  }

  render() {
    return(
      <div>
        <form>
          <label>Input 100 words</label>
          <br/>
          <textarea type="text"
            onChange={(event) => this.handleTextChange(event)}/>
        </form>
      </div>
    );
  }
}

export default Workoutinfo;