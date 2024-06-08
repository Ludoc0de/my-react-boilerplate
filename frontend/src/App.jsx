import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Websites from "./pages/Websites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateWebsite from "./pages/CreateWebsite";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/createWebsite" element={<CreateWebsite />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
