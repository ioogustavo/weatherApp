import React from "react";
import GoogleMaps from "simple-react-google-maps";

export default function Map(props) {
  return (
    <div className="container">
      <div className="row justify-content-center h-100">
        <div className="card-body">
          {props.props ? (
            <GoogleMaps
              apiKey={"AIzaSyDtzlltd1ot9s87Hc-Fx2hl5Ce5Ypq-SpY"}
              style={{ height: "300px", width: "auto" }}
              zoom={12}
              center={{
                lat: props.props.lat,
                lng: props.props.lon,
              }}
            />
          ) : (
            <h1>No se encuentra la ciudad</h1>
          )}
        </div>
      </div>
    </div>
  );
}
