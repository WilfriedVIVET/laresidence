import axios from "axios";

export const GET_PLAT = "GET_PLAT";

export const getPlat = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_RESIDENCE/plat");
      dispatch({ type: GET_PLAT, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
