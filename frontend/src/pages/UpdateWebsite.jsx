import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import webService from "../features/webService";
import Spinner from "../components/Spinner";

const UpdateWebsite = () => {
  const [website, setWebsite] = useState({ text: "" });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // Get websites
  const fetchWebsites = async (id, token) => {
    try {
      const websites = await webService.getWebsite(token);
      const websiteToUpdate = websites.find((web) => web._id === id);
      setWebsite(websiteToUpdate || { text: "" });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      fetchWebsites(id, user.token);
    } else {
      setLoading(false);
    }
  }, [id]);

  const onChange = (e) => {
    setWebsite((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const deleteWebsite = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      try {
        await webService.deleteWebsite(id, user.token);
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete the website. Please try again.");
      }
    } else {
      console.error("User is not authenticated");
    }
  };

  const onClickDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce site ?")) {
      await deleteWebsite(id);
      navigate("/websites");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      try {
        await webService.updateWebsite(id, website, user.token);
        navigate("/websites");
      } catch (error) {
        console.error("Create failed:", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-200 rounded-xl prose lg:prose-xl max-w-lg mx-auto">
      <h3 className="pl-2">Mise à jour du site</h3>
      <div className="block p-6 rounded-lg shadow-lg">
        <form onSubmit={onSubmit}>
          <div className="form-group mb-6">
            <label>texte</label>
            <input
              className="input input-bordered w-full"
              type="text"
              id="text"
              name="text"
              value={website.text}
              placeholder={website.text}
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-6">
            <button type="submit" className="btn btn-block">
              Mettre à jour
            </button>
            <button onClick={() => onClickDelete(id)}>Delete</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default UpdateWebsite;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import webService from "../features/webService";
// import Spinner from "../components/Spinner";

// const UpdateWebsite = (onClickDelete) => {
//   const [website, setWebsite] = useState([]);
//   const [currentWebsite, setCurrentWebsite] = useState({ text: "" });
//   const [loading, setLoading] = useState(true);
//   const { text } = website;

//   const navigate = useNavigate();

//   //Delete
//   // Get websites
//   const fetchWebsites = async (token) => {
//     try {
//       const websites = await webService.getWebsite(token);
//       setWebsite(websites);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteWebsite = async (id) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.token) {
//       try {
//         await webService.deleteWebsite(id, user.token);
//         setWebsite(website.filter((web) => web._id !== id));
//       } catch (error) {
//         console.error("Delete failed:", error);
//         alert("Failed to delete the website. Please try again.");
//       }
//     } else {
//       console.error("User is not authenticated");
//     }
//   };

//   const onClickDelete = async (id) => {
//     if (window.confirm("Voulez-vous vraiment supprimer ce site ?")) {
//       await deleteWebsite(id);
//       navigate("/websites");
//     }
//   };

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.token) {
//       fetchWebsites(user.token);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   //Update
//   const onChange = (e) => {
//     setCurrentWebsite((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const onSubmit = async (e, id) => {
//     e.preventDefault();

//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.token) {
//       try {
//         await webService.updateWebsite(id, currentWebsite, user.token);
//         fetchWebsites(user.token);
//         setCurrentWebsite({ text: "" });
//         // navigate("/websites");
//       } catch (error) {
//         console.error("Create failed:", error);
//       }
//     } else {
//       console.error("User is not authenticated");
//     }
//   };

//   return (
//     <section className="bg-base-200 rounded-xl prose lg:prose-xl max-w-lg mx-auto">
//       <h3 className="pl-2">Completer votre site</h3>
//       <div className="block p-6 rounded-lg shadow-lg">
//         <form onSubmit={(e) => onSubmit(e, currentWebsite._id)}>
//           <div className="form-group mb-6">
//             <label>texte</label>
//             <input
//               className="input input-bordered w-full"
//               type="text"
//               id="text"
//               name="text"
//               value={currentWebsite.text}
//               placeholder="test"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group mb-6">
//             <button type="submit" className="btn btn-block">
//               Mise à jour
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* DELETE */}
//       <div>
//         {loading ? (
//           <Spinner />
//         ) : (
//           <div>
//             {website.map((web) => (
//               <div key={web._id}>
//                 <p>{web.text}</p>
//                 <button onClick={() => onClickDelete(web._id)}>Delete</button>
//                 <button onClick={() => setCurrentWebsite(web)}>Update</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
// export default UpdateWebsite;
