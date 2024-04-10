import axios from "axios";

export const GET_EPHEMERIDE = "GET_EPHEMERIDE";

export const getEphemeride = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://nominis.cef.fr/json/nominis.php");
      console.log("données api = " + res.data);
      //dispatch({ type: GET_EPHEMERIDE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
