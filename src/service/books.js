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

export const fetchAllBooks = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/books",
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
  const response = await fetch(process.env.REACT_APP_API_URL + "/genres", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await response.json();
};

export const fetchTopBooks = async (amount) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/releases/top?pageSize=" + amount,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  const json = await response.json();
  return json.content;
};

export const fetchReleases = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/releases", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = await response.json();
  return json.content;
};

export const createRelease = async (release) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/releases", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(release),
  });
  return await response.json();
};

export const createBook = async (release) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/books", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(release),
  });
  return await response.json();
};

