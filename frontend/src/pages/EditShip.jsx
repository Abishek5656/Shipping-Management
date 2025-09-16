// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getShips, updateShip } from "../api/api";

// export default function EditShip() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", type: "", email: "" });

//   useEffect(() => {
//     const fetchShip = async () => {
//       try {
//         const { data } = await getShips();
//         const ship = data.find((s) => s._id === id);
//         if (ship) setForm(ship);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchShip();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateShip(id, form);
//       navigate("/");
//     } catch (err) {
//       alert("Failed to update ship");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 w-96 space-y-3"
//       >
//         <h2 className="text-xl font-bold">Edit Ship</h2>
//         <input
//           type="text"
//           placeholder="Ship Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border w-full px-3 py-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Type"
//           value={form.type}
//           onChange={(e) => setForm({ ...form, type: e.target.value })}
//           className="border w-full px-3 py-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="border w-full px-3 py-2 rounded"
//           required
//         />
//         <button className="bg-green-600 text-white w-full py-2 rounded">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShips, updateShip } from "../api/api";

export default function EditShip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", type: "", email: "" });

  useEffect(() => {
    const fetchShip = async () => {
      try {
        const { data } = await getShips();
        const ship = data.find((s) => s._id === id);
        if (ship) setForm(ship);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShip();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateShip(id, form);
      navigate("/");
    } catch (err) {
      alert("Failed to update ship");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-4" style={{
      background: "linear-gradient(135deg, #0062cc 0%, #0096ff 100%)",
      width: "100vw",
      height: "100vh"
    }}>
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-white border-0 rounded-top-4 py-4 px-4">
              <h2 className="text-center text-primary mb-0 fw-bold">
                <i className="fas fa-edit me-2"></i>
                Edit Ship
              </h2>
            </div>

            <div className="card-body px-4 py-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="shipName" className="form-label fw-semibold text-dark mb-2">
                    Ship Name
                  </label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="fas fa-ship text-primary"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-2"
                      id="shipName"
                      placeholder="Enter ship name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="shipType" className="form-label fw-semibold text-dark mb-2">
                    Type
                  </label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="fas fa-tag text-primary"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-2"
                      id="shipType"
                      placeholder="Enter ship type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="shipEmail" className="form-label fw-semibold text-dark mb-2">
                    Email Address
                  </label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="fas fa-envelope text-primary"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control border-start-0 ps-2"
                      id="shipEmail"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-text text-muted mt-2">
                    We'll never share this email with anyone else.
                  </div>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <button type="submit" className="btn btn-success btn-lg rounded-3 py-3 fw-bold">
                    <i className="fas fa-save me-2"></i>
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm rounded-3 mt-2"
                    onClick={() => navigate("/")}
                  >
                    <i className="fas fa-arrow-left me-1"></i>
                    Back to Dashboard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
