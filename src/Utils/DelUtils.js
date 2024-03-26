import axios from "axios";

//Suppression d'un plat
export const deletePlat = async (plat) => {
  try {
    const response = await axios.post(
      "http://localhost/API_RESIDENCE/deletePlat.php",
      JSON.stringify(plat)
    );
    alert("alert " + response.data.success);
  } catch (error) {
    alert("Erreur de  :" + error.response.message);
    throw error;
  }
};
