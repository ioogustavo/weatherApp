import React, { useEffect, useState } from "react";
import Card from "./card/Card.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { getAllCities } from "../../redux/actions/index.js";

export function Weather(props) {
  //nombre de ciudad seleccionada con todos sus datos
  const [city, setCity] = useState({});
  //lista de ciudades
  const [nameCity, setNameCity] = useState();
  //nombre unico de ciudad seleccionada
  const [name, setName] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/allCities").then((res) => {
      //Seteo Mendoza en city
      setCity(res.data.hola[8]);

      //Preparo la lista de nombres
      let lista = res.data.hola.map((nombre) => nombre.nombre);
      lista.sort();
      setNameCity(lista);
    });
  }, []);

  function handleInputChange(e) {
    let nombreCiudad = e.target.value;
    setName(nombreCiudad);
  }

  function handleSubmit() {
    props.getAllCities(name);
  }

  return (
    <div>
      <div className="column">
        <br />
        <br />
        <br />
        <div className="col-md-6 offset-md-3">
          <div className="col-md-12 text-center">
            <h3>Selecciona una ciudad</h3>
          </div>
          <br />

          <div className="form-row">
            <div className="col-md-12 text-center">
              <select
                className="browser-default custom-select"
                name="city"
                onChange={handleInputChange}
              >
                <option selected disabled>
                  Selecciona una ciudad
                </option>

                {nameCity &&
                  nameCity.map((name) => <option value={name}>{name}</option>)}
              </select>
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                Buscar Ciudad
              </button>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      {!props.city ? <Card props={city} /> : <Card props={props.city.city} />}
      <br />
    </div>
  );
}

function mapStateToProps(state) {
  if (state) {
    return {
      city: state,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCities: (name) => dispatch(getAllCities(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
