import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShips } from "../api/api";
import Navbar from "../components/Navbar";
import ShipCard from "../components/ShipCard";

export default function Dashboard() {
  const [ships, setShips] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const { data } = await getShips();
        setShips(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShips();
  }, []);

  const filtered = ships.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar search={search} setSearch={setSearch} />

      {/* Add Ship Button */}
      <div className="p-6 flex justify-end">
        <button
          onClick={() => navigate("/add")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add New Ship
        </button>
      </div>

      {/* Ship Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((ship) => (
          <ShipCard
            key={ship._id}
            ship={ship}
            onDelete={(id) =>
              setShips((prev) => prev.filter((s) => s._id !== id))
            }
          />
        ))}
      </div>
    </div>
  );
}
