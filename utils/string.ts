export const capitalize = (str: string) => {
  const firstLetter = str.length > 0 ? str[0].toUpperCase() : "";
  const rest = str.length >= 2 ? str.substring(1) : "";
  return firstLetter + rest;
};
