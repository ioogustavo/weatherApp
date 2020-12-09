import React from "react";

export default function Name(props) {
  return (
    <div className="container">
      {/* {console.log("entro a name", props)} */}
      <div className="row justify-content-center h-100">
          {props.props ? (
            <h3>Ciudad: {props.props}</h3>
          ) : (
            <h3>No se encuentra el nombre</h3>
          )}
      </div>
    </div>
  );
}
