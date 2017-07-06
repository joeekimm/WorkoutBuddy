import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapMarkers';


class GoogleMap extends Component {
  render() {
    return (
      <div className="gmap-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text={'Mariano'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
GoogleMap.defaultProps = {
  center: { lat: 59.95, lng: 30.33 },
  zoom: 11,
};

export default GoogleMap;
