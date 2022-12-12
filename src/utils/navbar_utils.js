import { useNavigate } from "react-router-dom";

export const useUserNavbarLinks = () => {
  const navigate = useNavigate();
  return [
    { name: "Wyszukiwarka", redirect: () => navigate("/search") },
    { name: "O nas", redirect: () => navigate("/about") },
    { name: "Moje kąto", redirect: () => navigate("/account") },
    { name: "Wyloguj", redirect: () => navigate("/logout") },
  ];
};
