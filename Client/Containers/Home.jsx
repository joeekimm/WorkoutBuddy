import React, { Component } from 'react';
import { login } from '../Actions/LogActions';
import { connect } from 'react-redux';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageScrolling: false,
    };

    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleNavScroll = this.handleNavScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavScroll )
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNavScroll )
  }

  handlePageScroll(id) {
    TweenLite.to(window, .5, {scrollTo: `#${id}`});
  }

  handleNavScroll() {
    this.setState({ pageScrolling: true })
  }

  render() {
    return (
      <div className="home-wrapper">
       <nav className="nav-bar">
         <h2>WorkoutBuddy</h2>
         <button>login</button>
       </nav>
        <div className="home">
          <div />
          <p>
            Workout Buddy is a platform that <br />
            connects fitness freaks together!
          </p>
          <button onClick={this.props.login}>see how many people around your area!</button>
          <button onClick={ () => this.handlePageScroll('discover') } className="down">
            <i className="animated pulse infinite fa fa-chevron-down move-downwards" aria-hidden="true" />
          </button>
        </div>
        <div id="discover" className="how-it-works">
          How It Works
        </div>
      </div>
    )
  }
}

export default connect(null, { login })(Home);