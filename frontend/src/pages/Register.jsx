// import { useState } from "react";
// import { register } from "../api/api";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await register(form);
//       console.log("data", data)
//       localStorage.setItem("token", data.token);
//       navigate("/");
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//        <div className="container-fluid d-flex justify-content-center align-items-center bg-light" 
//     style={{  
//     width: "100vw", 
//     height: "100vh",
//     border:"2px solid red"}}>
//       <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="form-control"
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100 mb-3">Register</button>
//         </form>
//         <p className="text-center text-muted">
//           have an account?{" "}
//           <Link to="/login" className="text-decoration-none">
//             Login
//           </Link>
//         </p>
//       </div> 
//     </div>
//   );
// }

// import { useState } from "react";
// import { register } from "../api/api";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // reset error
//     try {
//       console.log("Register Payload:", form); // debug log
//       const { data } = await register(form);
//       console.log("Server Response:", data);

//       if (data?.token) {
//         localStorage.setItem("token", data.token);
//         navigate("/");
//       } else {
//         setError("Unexpected response from server");
//       }
//     } catch (err) {
//       console.error("Register error:", err.response?.data || err.message);
//       setError(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center bg-light"
//       style={{
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Username"
//               value={form.username}
//               onChange={(e) => setForm({ ...form, username: e.target.value })}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="form-control"
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100 mb-3" type="submit">
//             Register
//           </button>
//         </form>

//         <p className="text-center text-muted">
//           Have an account?{" "}
//           <Link to="/login" className="text-decoration-none">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Frontend validation function
  const validateForm = () => {
    if (!form.username.trim()) {
      return "Username is required";
    }

    // At least 3 characters, letters/numbers only
    if (!/^[a-zA-Z0-9_]{3,}$/.test(form.username)) {
      return "Username must be at least 3 characters and contain only letters, numbers, or underscores";
    }

    if (!form.email.trim()) {
      return "Email is required";
    }

    // Basic email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email";
    }

    if (!form.password.trim()) {
      return "Password is required";
    }

    if (form.password.length < 6) {
      return "Password must be at least 6 characters long";
    }

    return null; // no error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    // ✅ Run frontend validation before API call
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      console.log("Register Payload:", form); // debug log
      const { data } = await register(form);
      console.log("Server Response:", data);

      if (data?.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError("Unexpected response from server");
      }
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="form-control"
              required
            />
          </div>
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
          <button className="btn btn-primary w-100 mb-3" type="submit">
            Register
          </button>
        </form>

        <p className="text-center text-muted">
          Have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
