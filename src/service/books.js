import { getToken } from "./user";

export const findBooksInLibrary = async (filters) => {
  const response = await fetch(process.env.API_URL + "/books?" + new URLSearchParams(filters), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = await response.json();
  return json;
};
