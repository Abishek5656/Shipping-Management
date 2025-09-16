// export default function Navbar({ search, setSearch }) {
//   return (
//     <div className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex justify-between items-center z-50">
//       {/* Left: Search */}
//       <input
//         type="text"
//         placeholder="Search ships..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border px-3 py-2 rounded w-64 max-w-full"
//       />

//       {/* Right: Logout */}
//       <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default function Navbar({ search, setSearch }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="#">
//           Ship Management
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           {/* Search Input */}
//           <div className="d-flex mt-3 mt-lg-0 me-lg-3">
//             <div className="input-group">
//               <span className="input-group-text bg-light">
//                 <Search size={18} />
//               </span>
//               <input
//                 type="text"
//                 placeholder="Search ships..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="form-control"
//               />
//             </div>
//           </div>

//           {/* Logout Button */}
//           <div className="d-flex mt-3 mt-lg-0">
//             <button className="btn btn-outline-light d-flex align-items-center">
//               <LogOut size={18} className="me-1" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React from "react";
import { Search, LogOut } from "lucide-react";

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Ship Management
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Input */}
          <div className="d-flex mt-3 mt-lg-0 me-lg-3">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search ships..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          {/* Logout Button */}
          <div className="d-flex mt-3 mt-lg-0">
            <button className="btn btn-outline-light d-flex align-items-center">
              <LogOut size={18} className="me-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
