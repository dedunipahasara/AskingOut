export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};