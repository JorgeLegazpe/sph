import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { compose, withProps, withStateHandlers } = require("recompose");
console.log("skdjakldjaljaldjslshd");
const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: props.posicion.location.coords.lat,
        lng: props.posicion.location.coords.lng
      }}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.filter.map(marker => (
          <Marker
            key={marker.empresa}
            position={{
              lat: marker.location.coords.lat,
              lng: marker.location.coords.lng
            }}
          />
        ))}
      </MarkerClusterer>
      <Marker
        position={{
          lat: props.posicion.location.coords.lat,
          lng: props.posicion.location.coords.lng
        }}
      />
    </GoogleMap>
  ))
);

export default class Maps extends React.PureComponent {
  state = {
    isMarkerShown: false,
    loggedInUser: null,
    filterProf: this.props.filterProf
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      ...this.state,
      loggedInUser: nextProps["userInSession"],
      filterProf: nextProps["filterProfesionals"]
    });
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return this.state.loggedInUser ? (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzW2O8kun6MFHbsvAL0nc7lOdmLw924LQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        posicion={this.state.loggedInUser}
        filter={this.state.filterProf}
      />
    ) : (
      <p>load</p>
    );
  }
}
