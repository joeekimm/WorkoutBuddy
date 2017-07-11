import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';
import { login } from '../Actions/LogActions';
import { FetchCitiesAction } from '../Actions/FetchCitiesAction';
import Cities from '../Components/PopularCityEntry';
import GoogleMap from '../Components/GoogleMaps';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageScrolling: false,
      nearbyUsers: {},
      currentLat: { lat: 40.4744, lng: -74.2591 },
    };

    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleNavScroll = this.handleNavScroll.bind(this);
    this.fetchNearbyUsers = this.fetchNearbyUsers.bind(this);
  }

  async componentDidMount() {
    const { FetchCitiesAction } = this.props;
    window.addEventListener('scroll', this.handleNavScroll);
    await FetchCitiesAction();
    await this.fetchNearbyUsers(this.props.cities.data[0][0].lat);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNavScroll);
  }

  handlePageScroll(id) {
    TweenLite.to(window, 0.5, { scrollTo: `#${id}` });
  }

  handleNavScroll() {
    if (!document.body.scrollTop) {
      this.setState({ pageScrolling: false });
    } else {
      this.setState({ pageScrolling: true });
    }
  }

  fetchNearbyUsers(loc) {
    let location = JSON.parse(loc);
    axios.get(`/api/users/nearbyUsers/${location.lat}`)
      .then(res => this.setState({ nearbyUsers: res }))
      .then(() => {
        location = { lat: location.lat, lng: location.lng };
        this.setState({ currentLat: location });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { login, history, cities } = this.props;
    return (
      <div className="home-wrapper">
        <nav className={this.state.pageScrolling ? 'nav-scroll low-shadow' : 'nav-bar'}>
          <h2>WorkoutBuddy</h2>
          <button onClick={() => { login(history); }}>Log in</button>
        </nav>
        <div className="home">
          <div />
          <p>
            Workout Buddy is a platform that <br />
            connects fitness freaks together!
          </p>
          <button className="area">see how many people around your area</button>
          <button onClick={() => this.handlePageScroll('discover')} className="down">
            <i className="animated pulse infinite fa fa-chevron-down move-downwards" aria-hidden="true" />
          </button>
        </div>
        <div id="discover" className="how-it-works">
          <h1>Find workout partners near you</h1>
          <div className="app-usage">
            <h2>See people using the app in</h2>
            <select className="city-filter" onChange={(e) => { this.fetchNearbyUsers(e.target.value); }}>
              {'data' in cities ? cities.data[0].map(city => <Cities key={city.id} city={city} />) : []}
            </select>
          </div>
          <div className="map-icons">
            <div className="inspo">
              <div>
                <img alt="tone" src="../Assets/Icons/fitness.png" />
              </div>
              tone-up
            </div>
            <div className="inspo">
              <div>
                <img alt="weight-lift" src="../Assets/Icons/weightlifter.png" />
              </div>
              bulk-up
            </div>
            <div className="inspo">
              <div>
                <img alt="heart" src="../Assets/Icons/cardiogram.png" />
              </div>
              get healthy!
            </div>
          </div>
          <GoogleMap center={this.state.currentLat} nearbyUsers={this.state.nearbyUsers} />
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  cities: state.cities,
});

export default connect(MapStateToProps, { login, FetchCitiesAction })(Home);
