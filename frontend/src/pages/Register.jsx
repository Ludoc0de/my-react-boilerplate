import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../features/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;
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
      await authService.register(userData);
      navigate("/");
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <>
      <section className="prose container my-8 text-center">
        <h2>Enregistrez vous</h2>
        <h4>Merci de créer votre compte.</h4>
      </section>

      <section className="prose lg:prose-xl max-w-sm mx-auto">
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
              <input
                className="input input-bordered w-full"
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirmez votre mot de passe"
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-6">
              <button type="submit" className="btn btn-block">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
