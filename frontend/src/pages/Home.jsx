import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
// import { Link } from "react-router-dom";

const Home = () => {
  const [website, setWebsite] = useState([]);
  console.log(website);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/web/")
      .then((response) => {
        setWebsite(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>Home</div>
      {/* {loading ? (
        <Spinner />
      ) : (
        <div>
          {website.map((web) => (
            <p key={web._id}>{web.text}</p>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Home;
