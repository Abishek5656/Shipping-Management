import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addShip } from "../api/api.js";

export default function AddShip() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", type: "", capacity: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addShip(form);
      navigate("/"); // go back to dashboard
    } catch (err) {
      alert("Failed to add ship");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 space-y-3"
      >
        <h2 className="text-xl font-bold">Add New Ship</h2>
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
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Add Ship
        </button>
      </form>
    </div>
  );
}
