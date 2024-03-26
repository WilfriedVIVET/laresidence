export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  );
};

//Formatage date en jours/mois en lettre/année
export const formatDate = (date) => {
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day}${months[monthIndex]}${year}`;
};

//Fonction qui recupère la date de début et de fin de la semaine du jour en cours.
export function daysOfWeek(date) {
  // Copie la date fournie pour ne pas la modifier
  const currentDate = new Date(date);

  // Détermine le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
  const dayOfWeek = currentDate.getDay();

  // Calcule la différence entre le jour actuel et le lundi (0 pour dimanche, 1 pour lundi, ...)
  const diff = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);

  // Initialise la date de début de semaine au lundi de cette semaine
  const startOfWeek = new Date(currentDate.setDate(diff));

  // Initialise la date de fin de semaine au dimanche de cette semaine
  const endOfWeek = new Date(currentDate.setDate(diff + 6));

  return {
    startOfWeek,
    endOfWeek,
  };
}
