import { getToken } from "./user";

export const fetchReservations = async () => {
    const response = await fetch(process.env.API_URL + "/reservations", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return await response.json();
};
