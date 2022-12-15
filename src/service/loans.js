import { getToken } from "./user";

export const fetchLoans = async () => {
  const response = await fetch(process.env.API_URL + "/loans", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await response.json();
};

export const createLoan = async () => {
  const response = await fetch(process.env.API_URL + "/loans", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await response.json();
};
