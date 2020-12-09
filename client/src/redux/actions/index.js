import axios from "axios";

export function getAllCities(payload) {
  return function (dispatch) {
    let ciudadElegida = payload;
    const allCities = axios({
      method: "GET",
      url: `http://localhost:3001/allCities/${ciudadElegida}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    allCities.then((resp) => {
      let respuesta = resp.data.hola;
      dispatch({
        type: "GET_CITY",
        payload: respuesta,
      });
    });
    allCities.catch((err) => {
      console.log("Hubo un error", err);
    });
  };
}
