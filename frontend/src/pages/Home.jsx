import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid">
      <div>Home</div>
      <Link to="/login">Login</Link>
      <Link to="/websites">Websites</Link>
    </div>
  );
};

export default Home;
