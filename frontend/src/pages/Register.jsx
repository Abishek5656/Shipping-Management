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
       <div className="container-fluid d-flex justify-content-center align-items-center bg-light" 
    style={{  
    width: "100vw", 
    height: "100vh",
    border:"2px solid red"}}>
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary w-100 mb-3">Register</button>
        </form>
        <p className="text-center text-muted">
          have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </div> 
    </div>
  );
}
