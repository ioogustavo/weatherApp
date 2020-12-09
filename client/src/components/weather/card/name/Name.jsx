import React from "react";

export default function Name(props) {
  return (
    <div className="container h-100">
      {/* {console.log("entro a name", props)} */}
      <div className="row justify-content-center h-100">
        <div className="col-sm-8 align-self-center text-center">
          <div className="card shadow">
            <div className="card-body">
                {props && <h1>{props.props}</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
