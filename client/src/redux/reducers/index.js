const initialState = {
  city: [],
};

export default function rooReducer(state = initialState, action) {
  if (action.type === "GET_CITY") {
    return {
      ...state,
      city: action.payload,
    };
  }
}
