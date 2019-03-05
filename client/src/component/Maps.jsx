import React from "react";
import { Link } from "react-router-dom";
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
            onClick={() => {
              props.handleMarkerClick({ company: marker.empresa });
            }}
          >
            {props.openInfoWindows[marker.empresa] && (
              <InfoWindow
                onCloseClick={() =>
                  props.handleCloseInfoWindow({ company: marker.empresa })
                }
              >
                <div>
                  <div>{marker.empresa}</div>
                  <div>{marker.ubication}</div>
                  <Link to="/chat">
                    <button>Contactar</button>
                  </Link>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </MarkerClusterer>
      <Marker
        position={{
          lat: props.posicion.location.coords.lat,
          lng: props.posicion.location.coords.lng
        }}
        onClick={() => props.handleMarkerClick({ a: true })}
      >
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div style={{ background: "black", color: "white" }}>
            <h1>Tu estás aquí</h1>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ))
);

export default class Maps extends React.PureComponent {
  state = {
    isMarkerShown: false,
    loggedInUser: null,
    filterProf: this.props.filterProf,
    openInfoWindows: undefined
  };

  componentWillReceiveProps(nextProps) {
    let openInfoWindowsObj = {};

    for (var key in nextProps["filterProfesionals"]) {
      openInfoWindowsObj[nextProps["filterProfesionals"][key].empresa] = false;
    }

    this.setState({
      ...this.state,
      loggedInUser: nextProps["userInSession"],
      filterProf: nextProps["filterProfesionals"],
      openInfoWindows: openInfoWindowsObj
    });
  }

  handleMarkerClick = e => {
    var openInfoWindowsCloned = { ...this.state.openInfoWindows };

    openInfoWindowsCloned[e.company] = true;

    this.setState({
      ...this.state,
      isMarkerShown: false,
      openInfoWindows: openInfoWindowsCloned
    });
  };

  handleCloseInfoWindow = e => {
    var openInfoWindowsCloned = { ...this.state.openInfoWindows };

    openInfoWindowsCloned[e.company] = false;

    this.setState({
      ...this.state,
      isMarkerShown: false,
      openInfoWindows: openInfoWindowsCloned
    });
  };

  render() {
    return !this.state.loggedInUser ? (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzW2O8kun6MFHbsvAL0nc7lOdmLw924LQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        openInfoWindows={this.state.openInfoWindows}
        handleCloseInfoWindow={this.handleCloseInfoWindow}
        //this.state.userInSession o loggedInUser
        posicion={{
          _id: "5c7d129701e2f81bca3f3b0d",
          email: "pepe@pepe.com",
          password:
            "$2b$10$jQ21UUT7KXgQqJel9GeLpeWa8q9fSLx1cdFw1CRwmQA13/LUF8J.m",
          name: "Pepe",
          phone: 321313123,
          ubication: "Alcala 25 Madrid",
          location: {
            type: "Point",
            coords: { lat: 40.4182075, lng: -3.6989813 }
          },
          rol: "user",
          created_at: "2019-03-04T11:57:11.278Z",
          updated_at: "2019-03-04T11:57:11.278Z",
          __v: 0
        }}
        filter={this.state.filterProf}
        handleMarkerClick={this.handleMarkerClick}
      />
    ) : (
      <p>load</p>
    );
  }
}
