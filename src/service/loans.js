import { getToken } from "./user";

export const fetchLoans = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/loans", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = await response.json();
  return json.content;
};

export const fetchLoan = async (id) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/loans/" + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = await response.json();
  return json;
};

export const fetchUserLoans = async (userId) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/loans/users/" + userId,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  const json = await response.json();
  return json.content;
};

export const createLoan = async (bookingId, email) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/loans", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reservationId: bookingId, username: email }),
  });
  return await response.json();
};

export const extendLoan = async (loanId) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/loans/" + loanId + "/extend",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return await response.json();
};

export const requestLoanExtension = async (loanId) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/loans/" + loanId + "/request-extension",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return await response.json();
};

export const returnLoan = async (loanId) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/loans/" + loanId + "/return",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return await response.json();
};
