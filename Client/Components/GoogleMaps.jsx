import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapMarkers';


class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="gmap-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {'data' in this.props.nearbyUsers ? this.props.nearbyUsers.data[0].map(user => <Marker lat={user.lat} lng={user.lng} text={user.firstName} />) : []}
        </GoogleMapReact>
      </div>
    );
  }
}
GoogleMap.defaultProps = {
  center: { lat: 34.0522, lng: -118.244 },
  zoom: 13,
};

export default GoogleMap;
