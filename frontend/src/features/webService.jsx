import axios from "axios";

const API_URL = "http://localhost:5000/api/web/";

// get Website
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
};

export default webService;
