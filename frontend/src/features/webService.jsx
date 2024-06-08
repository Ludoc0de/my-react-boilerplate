import axios from "axios";
const API_URL = "http://localhost:5000/api/web/";

// Create website
const createWebsite = async (webData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, webData, config);
  return response.data;
};

// Get Website
const getWebsite = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export webService
const webService = {
  getWebsite,
  createWebsite,
};

export default webService;
