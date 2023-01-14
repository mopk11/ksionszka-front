import { getToken } from "./user";

export const findBooksInLibrary = async (filters) => {
  filters.loaned = false;
  filters.reserved = false;
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/books?" + new URLSearchParams(filters),
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  const json = await response.json();
  return json.content;
};

export const fetchGenres = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/genres",
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return await response.json();
}