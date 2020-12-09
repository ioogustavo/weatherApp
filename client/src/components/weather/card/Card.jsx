import React from "react";

import Humidity from "./humidity/Humidity";
import Map from "./map/Map";
import Name from "./name/Name";
import Pressure from "./pressure/Pressure";
import Temperature from "./temperature/Temperature";

export default function Card(props) {


  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100">
        <div className="col-sm-8 align-self-center text-center">
          <div className="card shadow">
            <div className="card-body">
              {/* {console.log(props.props)} */}
              <Name props={props.props.nombre} />
              {/* Se podrian preparar de mejor manera, refactorizar */}
              <Map props={props.props}/>
              <Temperature props={props.props}/>
              <Humidity props={props.props.humedad} />
              <Pressure props={props.props.presion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
