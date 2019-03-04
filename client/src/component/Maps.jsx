import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: props.posicion.location.coords.lat,
        lng: props.posicion.location.coords.lng
      }}
    >
      <Marker
        position={{
          lat: props.posicion.location.coords.lat,
          lng: props.posicion.location.coords.lng
        }}
      />

      <Marker
        position={{
          // for(var i = 1; i<filter.length; i++ ){
          //   lat: props.filter[0].location.coords.lat,
          // lng: props.filter[0].location.coords.lng
          // }
          lat: props.filter[0].location.coords.lat,
          lng: props.filter[0].location.coords.lng
        }}
      />
      <Marker
        position={{
          lat: props.filter[1].location.coords.lat,
          lng: props.filter[1].location.coords.lng
        }}
      />
      <Marker
        position={{
          lat: props.filter[2].location.coords.lat,
          lng: props.filter[2].location.coords.lng
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
