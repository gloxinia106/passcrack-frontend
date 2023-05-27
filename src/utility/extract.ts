export const extrackYear = (year: string) => {
  const parsedYear = parseInt(year, 10);
  let suffit = year.slice(-2);
  if (parsedYear >= 2000) {
    suffit = parseInt(suffit, 10).toString();
  }
  return suffit;
};
