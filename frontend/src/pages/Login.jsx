import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../features/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  //get input value
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    try {
      await authService.login(userData);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
