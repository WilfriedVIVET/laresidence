export const GET_MODE = "GET_MODE";

export const getMode = () => {
  return async (dispatch) => {
    //verification variable d'environnement.
    const mode = process.env.MODE;
    let url = "";

    try {
      if (mode || "production") {
        url = "";
      } else {
        url = "http://localhost/API_RESIDENCE/";
      }
      dispatch({ type: GET_MODE, payload: url });
    } catch (error) {
      alert("probleme global" + error);
    }
  };
};
