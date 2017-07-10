import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapMarkers';


class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gmap-container">
        <GoogleMapReact
          center={this.props.center}
          zoom={13}
        >
          {'data' in this.props.nearbyUsers ? this.props.nearbyUsers.data[0].map(user => <Marker lat={user.lat} lng={user.lng} text={user.firstName} />) : []}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
