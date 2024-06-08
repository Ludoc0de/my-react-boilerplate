import { useState } from "react";
import { useNavigate } from "react-router-dom";
import webService from "../features/webService";

const CreateWebsite = () => {
  const [webData, setWebData] = useState({
    text: "",
  });

  const { text } = webData;

  const navigate = useNavigate();

  //get input value
  const onChange = (e) => {
    setWebData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const webData = {
      text,
    };
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        await webService.createWebsite(webData, user.token);
        navigate("/websites");
      } else {
        console.error("User is not authenticated");
      }
    } catch (error) {
      console.error("Create failed:", error);
    }
  };
  return (
    <section className="bg-base-200 rounded-xl prose lg:prose-xl max-w-lg mx-auto">
      <h3 className="pl-2">Completer votre site</h3>
      <div className="block p-6 rounded-lg shadow-lg">
        <form onSubmit={onSubmit}>
          <div className="form-group mb-6">
            <label>texte</label>
            <input
              className="input input-bordered w-full"
              type="text"
              id="text"
              name="text"
              value={text}
              placeholder="text"
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
  );
};
export default CreateWebsite;
