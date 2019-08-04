export const API_KEY = "81d695b0";
export const typeMapping = {
  number: "i",
  type: "type",
  title: "t",
  search: "s"
};
export const getMoviesUrl = (query, type) =>
  `http://www.omdbapi.com/?${typeMapping[type]}=${query}&apikey=${API_KEY}`;
