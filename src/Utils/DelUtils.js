import axios from "axios";

//Suppression d'un plat
export const deletePlat = async (plat) => {
  try {
    const response = await axios.post(
      "http://localhost/API_RESIDENCE/deletePlat.php",
      JSON.stringify(plat)
    );
    alert(response.data.success);
  } catch (error) {
    alert("Erreur de  :" + error.response.message);
    throw error;
  }
};

//Suppresion d'un utilisateur
export const deleteUser = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost/API_RESIDENCE/deleteUtilisateur.php",
      JSON.stringify(id)
    );
    alert(response.data.success);
  } catch (error) {
    alert("Erreur de  :" + error.response.message);
    throw error;
  }
};
