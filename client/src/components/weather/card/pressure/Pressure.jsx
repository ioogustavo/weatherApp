import React from "react";

export default function Pressure(props) {
  return (
    <div className="container">
      <div className="row justify-content-center h-100">
        {props.props ? (
          <h4>Presión: {props.props}</h4>
        ) : (
          <h4>No se encuentra la presión</h4>
        )}
      </div>
    </div>
  );
}
