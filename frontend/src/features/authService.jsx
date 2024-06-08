import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export authService
const authService = {
  login,
};

export default authService;
