import { getToken } from "./user";

export const fetchReservations = async () => {
  const response = await fetch(process.env.API_URL + "/reservations", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = response.json();
  return json.content;
};

export const createReservation = async (id) => {
  const response = await fetch(process.env.API_URL + `/reservations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ bookId: id }),
  });

  if (response.status === 200) {
    return true;
  }
  return false;
};

export const cancelReservation = async (id) => {
  const response = await fetch(process.env.API_URL + `/reservations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    }
  });

  if (response.status === 204) {
    return true;
  }
  return false;
};