import React from "react";

export default function Humidity(props) {
  return (
    <div className="container">
      <div className="row justify-content-center h-100">
        {props.props ? (
          <h4>Humedad: {props.props}</h4>
        ) : (
          <h4>No se encuentra la humedad</h4>
        )}
      </div>
    </div>
  );
}
