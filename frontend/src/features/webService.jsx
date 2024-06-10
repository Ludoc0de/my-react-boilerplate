import axios from "axios";
const API_URL = "http://localhost:5000/api/web/";

// Create website
const createWebsite = async (webData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, webData, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
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

// Delete Website
const deleteWebsite = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(API_URL + id, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Update Website
const updateWebsite = async (id, website, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(API_URL + id, website, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export webService
const webService = {
  getWebsite,
  createWebsite,
  deleteWebsite,
  updateWebsite,
};

export default webService;
