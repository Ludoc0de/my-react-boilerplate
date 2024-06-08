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
      <button onClick={handleLogout}>Logout</button>
      <Link to="/websites">Websites</Link>
    </div>
  );
};

export default Home;
