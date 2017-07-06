import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div>hi</div>;


class GoogleMap extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="gmap-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
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
