import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState  } from "react";

// Lazy imports
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const EditShip = lazy(() => import("./pages/EditShip"));

import AddShip from "./pages/AddShip.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={token ? <Dashboard /> : <Login />} />
          <Route path="/add" element={token ? <AddShip /> : <Login />} />
          <Route path="/edit/:id" element={token ? <EditShip /> : <Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
