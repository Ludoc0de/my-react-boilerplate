import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const API_URL = "http://localhost:5000/api/users/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  //get input value
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Login user
  const login = async (userData) => {
    try {
      const response = await axios.post(API_URL + "login", userData);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      // return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    login(userData);
  };

  return (
    <>
      <section className="prose container my-8 text-center">
        <h2>Se connecter</h2>
        <h4>Connectez-vous à votre compte.</h4>
      </section>

      <section className="bg-base-200 rounded-lg prose lg:prose-xl max-w-sm mx-auto">
        <div className="block p-6 rounded-lg shadow-lg">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-6">
              <input
                className="input input-bordered w-full"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Entrer votre email"
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-6">
              <input
                className="input input-bordered w-full"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Entrer votre mot de passe"
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-6">
              <button type="submit" className="btn btn-block">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </section>
      <li className="max-w-sm mx-auto prose list-none mt-3 p-2">
        <Link className="no-underline" to="/">
          Accueil ?
        </Link>
      </li>
    </>
  );
};

export default Login;
