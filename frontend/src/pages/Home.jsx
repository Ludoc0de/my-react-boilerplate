import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
// import { Link } from "react-router-dom";

const Home = () => {
  const [website, setWebsite] = useState([]);
  // console.log(website);
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:5000/api/web/";
  // Get website
  const getWebsite = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(API_URL, config);
      setWebsite(response.data);
      // return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      getWebsite(user.token);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <div>Home</div>
      <Link to="/login">Login</Link>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {website.map((web) => (
            <p key={web._id}>{web.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
