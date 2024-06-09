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
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete Website
const deleteWebsite = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

// Update Website
const updateWebsite = async (id, profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, profileData, config);
  return response.data;
};

// export webService
const webService = {
  getWebsite,
  createWebsite,
  deleteWebsite,
  updateWebsite,
};

export default webService;
