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
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <h2 className="text-lg font-semibold">{ship.name}</h2>
      <p className="text-sm text-gray-600">Type: {ship.type}</p>
      <p className="text-sm text-gray-600">Capacity: {ship.capacity}</p>

      <div className="flex gap-4 mt-3">
        <button
          onClick={() => navigate(`/edit/${ship._id}`)}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Pencil size={16} /> Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-1 text-red-600 hover:underline"
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
}
