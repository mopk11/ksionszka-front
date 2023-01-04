export const fetchToken = async (username, password) => {
  const response = await fetch(process.env.API_URL + "/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const json = await response.json();
  if (!json.token) return false;
  localStorage.setItem("token", json.bearerToken);
  localStorage.setItem("role", json.user.role);
  return true;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const isUserAnAdmin = () => {
  return localStorage.getItem("role")?.toLowerCase() === "librarian";
};

export const fetchUsers = async () => {
  const response = await fetch(process.env.API_URL + "/users", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const json = await response.json();
  return json.content;
};

export const fetchUser = async (id) => {
  const response = await fetch(process.env.API_URL + "/users/" + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await response.json();
};

export const register = async (email, firstName, lastName, password) => {
  const response = await fetch(process.env.API_URL + "/register", {
    body: JSON.stringify({ email, firstName, lastName, password }),
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await response.json();
};
