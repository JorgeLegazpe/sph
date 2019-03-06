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
      // defaultCenter={{
      //   lat: props.posicion.location.coords.lat,
      //   lng: props.posicion.location.coords.lng
      // }}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {console.log(props)}
        {props.filter.map(marker =>
          console.log(props)(
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
          )
        )}
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

export default MapWithAMarker;
