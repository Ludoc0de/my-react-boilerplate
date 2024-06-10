import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Websites from "./pages/Websites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Price from "./pages/Price";
import CreateWebsite from "./pages/CreateWebsite";
import UpdateWebsite from "./pages/UpdateWebsite";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/price" element={<Price />} />
      <Route path="/createWebsite" element={<CreateWebsite />} />
      <Route path="/updateWebsite/:id" element={<UpdateWebsite />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
