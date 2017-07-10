import React, { Component } from 'react';


class MapMarkers extends Component {
  constructor() {
    super();
    this.state = {
      fadein: false,
    };
  }
  componentDidMount() {
    this.setState({ fadein: true });
  }
  componentWillUnmount() {
    console.log('shit came off the screen');
    this.setState({ fadein: false });
  }
  render() {
    console.log(this.state);
    return (
      <img alt="map-marker" src="https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-512.png" className={this.state.fadein ? 'map-marker fade-in' : 'map-marker fade-out'} />
    );
  }
}

export default MapMarkers;
