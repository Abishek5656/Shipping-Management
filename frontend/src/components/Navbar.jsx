import { useNavigate } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Ship Management
      </h1>

      <input
        type="text"
        placeholder="Search ships..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 rounded text-black"
      />

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </nav>
  );
}
