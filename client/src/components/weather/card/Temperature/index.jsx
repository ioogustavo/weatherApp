import React from "react";

export default function Temperature(props) {
  return (
    <div className="container">
      <div className="row justify-content-center h-100">
        {props.props ? (
          <div>
            <h4>Temp. Min: {props.props.temp_minima}</h4>
            <h4>Temp. Max: {props.props.temp_maxima}</h4>
          </div>
        ) : (
          <div>
            <h4>No se encuentra las temperaturas</h4>
          </div>
        )}
      </div>
    </div>
  );
}
