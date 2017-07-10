import React, { Component } from 'react';


class MapMarkers extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({ fadein: false });
  }

  render() {
    return (
      <img alt="map-marker" src="https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-512.png" className="map-marker fade-in" />
    );
  }
}

export default MapMarkers;
