import { useNavigate } from "react-router-dom";

export const useUserNavbarLinks = () => {
  const navigate = useNavigate();
  return [
    { name: "Wyszukiwarka", redirect: () => navigate("/search") },
    { name: "O nas", redirect: () => navigate("/about-us") },
    { name: "Moje kąto", redirect: () => navigate("/account") },
    { name: "Wyloguj", redirect: () => navigate("/logout") },
  ];
};

export const useAdminNavbarLinks = () => {
  const navigate = useNavigate();
  return [
    { name: "Książki", redirect: () => navigate("/books") },
    { name: "Wydania", redirect: () => navigate("/releases") },
    { name: "Rezerwacje", redirect: () => navigate("/reservations") },
    { name: "Wypożyczenia", redirect: () => navigate("/borrowings") },
    { name: "Użytkownicy", redirect: () => navigate("/users") },
    { name: "Wyloguj", redirect: () => navigate("/logout") },
  ];
};
