// import { useNavigate } from "react-router-dom";
// import { Pencil, Trash2 } from "lucide-react";
// import { deleteShip } from "../api/api";

// export default function ShipCard({ ship, onDelete }) {
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this ship?")) {
//       try {
//         await deleteShip(ship._id);
//         onDelete(ship._id); // update parent state
//       } catch (err) {
//         alert("Failed to delete ship");
//       }
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 flex flex-col hover:shadow-lg transition">
//       <h2 className="text-lg font-semibold">{ship.name}</h2>
//       <p className="text-sm text-gray-600">Type: {ship.type}</p>
//       <p className="text-sm text-gray-600">Capacity: {ship.capacity}</p>

//       <div className="flex gap-4 mt-3">
//         <button
//           onClick={() => navigate(`/edit/${ship._id}`)}
//           className="flex items-center gap-1 text-blue-600 hover:underline"
//         >
//           <Pencil size={16} /> Edit
//         </button>

//         <button
//           onClick={handleDelete}
//           className="flex items-center gap-1 text-red-600 hover:underline"
//         >
//           <Trash2 size={16} /> Delete
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { deleteShip } from "../api/api";

export default function ShipCard({ ship, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this ship?")) {
      try {
        await deleteShip(ship._id);
        onDelete(ship._id); // update parent state
      } catch (err) {
        alert("Failed to delete ship");
      }
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      {/* <div className="card-body">
        <h5 className="card-title">{ship.name}</h5>
        <p className="card-text mb-1"><small className="text-muted">Type:</small> {ship.type}</p>
        <p className="card-text"><small className="text-muted">Capacity:</small> {ship.capacity}</p>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <button
            onClick={() => navigate(`/edit/${ship._id}`)}
            className="btn btn-outline-primary btn-sm d-flex align-items-center"
          >
            <Pencil size={16} className="me-1" />
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-outline-danger btn-sm d-flex align-items-center"
          >
            <Trash2 size={16} className="me-1" />
            Delete
          </button>
        </div>
      </div> */}


      <div className="card h-100 shadow-sm ship-card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title text-truncate">{ship.name}</h5>
            <span className="badge bg-primary">{ship.type}</span>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-tag-fill text-muted me-2"></i>
              <span className="text-muted">Type:</span>
              <span className="ms-2">{ship.type || "Not specified"}</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-people-fill text-muted me-2"></i>
              <span className="text-muted">Email:</span>
              <span className="ms-2">{ship.email || "N/A"}</span>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-4 pt-2 border-top">
            <button
              onClick={() => navigate(`/edit/${ship._id}`)}
              className="btn btn-outline-primary btn-sm d-flex align-items-center action-btn"
            >
              <Pencil size={16} className="me-1" />
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="btn btn-outline-danger btn-sm d-flex align-items-center action-btn"
            >
              <Trash2 size={16} className="me-1" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}