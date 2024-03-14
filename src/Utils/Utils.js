export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  );
};

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
