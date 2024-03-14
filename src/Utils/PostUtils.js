import axios from "axios";

// Nouveau menu:
export const postMenu = async (menuDay) => {
  try {
    const response = await axios.post(
      "http://localhost/API_RESIDENCE/postMenu.php",
      JSON.stringify(menuDay)
    );
    alert(response.data.message);
  } catch (error) {
    alert("Erreur de  :" + error.response.data.error);
    throw error;
  }
};
