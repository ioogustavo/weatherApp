import axios from "axios";

export function getAllCities(payload) {
  return function (dispatch) {
    let ciudadElegida = payload;
    const allCities = axios({
      method: "GET",
      url: "http://localhost:3001/allCities",
      headers: {
        "Content-Type": "application/json",
      },
    });
    allCities.then((resp) => {
      let lista = resp.data.hola;
      const nombre = lista.find((element) => {
        if (element.nombre === ciudadElegida) {
          return element;
        }
      });
      dispatch({
        type: "GET_CITY",
        payload: nombre,
      });
    });
    allCities.catch((err) => {
      console.log("Hubo un error", err);
    });
  };
}
