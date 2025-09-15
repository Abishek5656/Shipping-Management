import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShips, updateShip } from "../api/api";

export default function EditShip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", type: "", capacity: "" });

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
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 space-y-3"
      >
        <h2 className="text-xl font-bold">Edit Ship</h2>
        <input
          type="text"
          placeholder="Ship Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) => setForm({ ...form, capacity: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <button className="bg-green-600 text-white w-full py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
