export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  );
};

//Formatage d'une date en (10-10-2024)
export const formateDateEu = (date) => {
  console.log("fonction getDate = " + date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

//Formatage d'une date en (10-mars-2024)
export const formateDateScript = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const month = monthNames[monthIndex];

  return `${day}-${month}-${year}`;
};

//Fonction qui recupère la date de début et de fin de la semaine du jour en cours.
export function daysOfWeek(date) {
  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay();
  const diff = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const startOfWeek = new Date(currentDate.setDate(diff));
  const endOfWeek = new Date(currentDate.setDate(diff + 6));

  return {
    startOfWeek,
    endOfWeek,
  };
}
