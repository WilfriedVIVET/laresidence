import axios from "axios";

export const GET_FROMAGE = "GET_FROMAGE";

export const getFromage = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_RESIDENCE/fromage");

      dispatch({ type: GET_FROMAGE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
