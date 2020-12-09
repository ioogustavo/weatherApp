import React from "react";

export default function Humidity(props) {
  return (
    <div className="container h-100">
      {/* {console.log("entro a humidity", props)} */}
      <div className="row justify-content-center h-100">
        <div className="col-sm-8 align-self-center text-center">
          <div className="card shadow">
            <div className="card-body">
              <h3>{props.props}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
