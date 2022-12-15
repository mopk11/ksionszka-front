import { getToken } from "./user";

export const findBooksInLibrary = async (filters) => {
//   const response = await fetch(process.env.API_URL + "/books", {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   const json = await response.json();
//   return json.books;
    return [
        {
            id: "1",
            author: "Władysław Dupa",
            genre: "Dramat",
            title: "Testowa książka",
            number: "j354c-abcd",
            year: "2137"
        },
        {
            id: "2",
            author: "Władysław Dupa",
            genre: "Dramat",
            title: "Testowa książka",
            number: "j354c-abcd",
            year: "2137"
        },
        {
            id: "3",
            author: "Władysław Dupa",
            genre: "Dramat",
            title: "Testowa książka",
            number: "j354c-abcd",
            year: "2137"
        },
        
    ]
};

export const createBookBooking = async (id) => {
  const response = await fetch(process.env.API_URL + `/book/${id}/booking`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (response.status === 200) {
    return true;
  }
  return false;
};
