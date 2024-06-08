import { Link, useNavigate } from "react-router-dom";
import authService from "../features/authService";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <div className="grid">
      <div>Home</div>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/websites">Websites</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
