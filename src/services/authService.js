import axios from "axios";

const API_URL = "https://localhost:44367/api/auth";

export async function login(username, password) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      Username: username,
      PasswordHash: password,
    });
    return response.data;
  } catch (error) {
    return { success: false, message: "Error al iniciar sesión." };
  }
}

export async function register(username, password) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      Username: username,
      PasswordHash: password,
    });
    return response.data;
  } catch (error) {
    return { success: false, message: "Error al registrar usuario." };
  }
}
