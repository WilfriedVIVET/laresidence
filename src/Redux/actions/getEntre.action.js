import axios from "axios";

export const GET_ENTRE = "GET_ENTRE";

export const getEntre = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_RESIDENCE/entre");

      dispatch({ type: GET_ENTRE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
