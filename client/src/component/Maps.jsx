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
        lat: props.posicion.loggedInUser.location.coords.lat,
        lng: props.posicion.loggedInUser.location.coords.lng
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
          lat: props.posicion.loggedInUser.location.coords.lat,
          lng: props.posicion.loggedInUser.location.coords.lng
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

export default class Maps extends React.Component {
  state = {
    isMarkerShown: false,
    loggedInUser: false,
    filterProf: null,
    openInfoWindows: undefined
  };

  componentWillReceiveProps(nextProps) {
    console.log("WILL RECIVE PROPS");
    let openInfoWindowsObj = {};
    console.log(nextProps);

    for (var key in nextProps["filterProfesionals"]) {
      openInfoWindowsObj[nextProps["filterProfesionals"][key].empresa] = false;
    }

    this.setState(
      {
        ...this.state,
        loggedInUser: nextProps["userInSession"],
        filterProf: nextProps["filterProfesionals"],
        openInfoWindows: openInfoWindowsObj
      },
      () => {
        console.log(this.state.loggedInUser);
      }
    );
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
    return this.state.loggedInUser ? (
      // <div>
      //   {this.state.loggedInUser.map(item => {
      //     console.log(item);
      //   })}
      // </div>
      <div>
        hay usuario
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzW2O8kun6MFHbsvAL0nc7lOdmLw924LQ&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          openInfoWindows={this.state.openInfoWindows}
          handleCloseInfoWindow={this.handleCloseInfoWindow}
          posicion={this.state}
          filter={this.state.filterProf}
          handleMarkerClick={this.handleMarkerClick}
        />
      </div>
    ) : (
      <p>load</p>
    );
  }
}
