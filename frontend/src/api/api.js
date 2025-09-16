import axios from "axios";

const API = axios.create({
  baseURL: "https://shipping-management-1.onrender.com",
});

// Attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Auth
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

// Ships
export const getShips = () => API.get("/ships");
export const addShip = (data) => API.post("/ships", data);
export const updateShip = (id, data) => API.put(`/ships/${id}`, data);
export const deleteShip = (id) => API.delete(`/ships/${id}`);
