import { getToken } from "./user";

export const findBooksInLibrary = async (filters) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/books?" + new URLSearchParams(filters),
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  const json = await response.json();
  return json;
};
