import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import webService from "../features/webService";

const Websites = () => {
  const [website, setWebsite] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      webService.getWebsite(user.token).then((data) => {
        setWebsite(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid">
      <div>Websites</div>
      <Link to="/">home</Link>
      <Link to="/createWebsite">créer</Link>
      <div>
        {website.map((web) => (
          <p key={web._id}>{web.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Websites;
