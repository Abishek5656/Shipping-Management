import { useState } from "react";
import { register } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(form);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded w-80 space-y-3"
      >
        <h2 className="text-xl font-bold">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <button className="bg-green-600 text-white w-full py-2 rounded">
          Register
        </button>
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
