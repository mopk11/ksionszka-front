export const fetchToken = async (username, password) => {
  const response = await fetch(process.env.API_URL + "/token", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const json = await response.json();
  if (!json.token) return false;
  localStorage.setItem("token", json.token);
  return true;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logOut = () => {
    localStorage.removeItem("token");
}

export const isUserAnAdmin = () => {
  return false;
};
