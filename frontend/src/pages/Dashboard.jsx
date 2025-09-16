// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { getShips, deleteShip } from "../api/api";
// // import Navbar from "../components/Navbar";
// // import ShipCard from "../components/ShipCard";
// // import { Pencil, Trash2, Search, LogOut, Plus } from "lucide-react";

// // // export default function Dashboard() {
// // //   const [ships, setShips] = useState([]);
// // //   const [search, setSearch] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchShips = async () => {
// // //       try {
// // //         const { data } = await getShips();
// // //         setShips(data);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     };
// // //     fetchShips();
// // //   }, []);

// // //   const filtered = ships.filter((s) =>
// // //     s.name.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       <Navbar search={search} setSearch={setSearch} />

// // //       {/* Add Ship Button */}
// // //       <div className="p-6 flex justify-end">
// // //         <button
// // //           onClick={() => navigate("/add")}
// // //           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //         >
// // //           + Add New Ship
// // //         </button>
// // //       </div>

// // //       {/* Ship Cards */}
// // //       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //         {filtered.map((ship) => (
// // //           <ShipCard
// // //             key={ship._id}
// // //             ship={ship}
// // //             onDelete={(id) =>
// // //               setShips((prev) => prev.filter((s) => s._id !== id))
// // //             }
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default function Dashboard() {
// // //   const [ships, setShips] = useState([]);
// // //   const [search, setSearch] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchShips = async () => {
// // //       try {
// // //         const { data } = await getShips();
// // //         setShips(data);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     };
// // //     fetchShips();
// // //   }, []);

// // //   const filtered = ships.filter((s) =>
// // //     s.name.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       {/* Navbar */}
// // //       <Navbar search={search} setSearch={setSearch} />

// // //       {/* Page content with padding to avoid overlap */}
// // //       <div className="pt-20 flex flex-col items-center px-6">
// // //         {/* Add Ship Button */}
// // //         <div className="mb-6">
// // //           <button
// // //             onClick={() => navigate("/add")}
// // //             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //           >
// // //             + Add New Ship
// // //           </button>
// // //         </div>

// // //         {/* Ship Cards */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
// // //           {filtered.map((ship) => (
// // //             <ShipCard
// // //               key={ship._id}
// // //               ship={ship}
// // //               onDelete={(id) =>
// // //                 setShips((prev) => prev.filter((s) => s._id !== id))
// // //               }
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // export default function Dashboard() {
// //   const [ships, setShips] = useState([]);
// //  const [search, setSearch] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchShips = async () => {
// //       try {
// //         const { data } = await getShips();
// //         setShips(data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchShips();
// //   }, []);

// //   const filtered = ships.filter((s) =>
// //     s.name.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="min-vh-100 bg-light">
// //       {/* Navbar */}
// //       <Navbar search={search} setSearch={setSearch} />

// //       {/* Main content */}
// //       <div className="container-fluid pt-5 mt-5 pb-4">
// //         <div className="container">
// //           {/* Header and Add Button */}
// //           <div className="d-flex justify-content-between align-items-center mb-4">
// //             <h1 className="h3 mb-0">Ship Dashboard</h1>
// //             <button
// //               onClick={() => navigate("/add")}
// //               className="btn btn-success d-flex align-items-center"
// //             >
// //               <Plus size={18} className="me-1" />
// //               Add New Ship
// //             </button>
// //           </div>

// //           {/* Ship Cards */}
// //           <div className="row g-4">
// //             {filtered.length > 0 ? (
// //               filtered.map((ship) => (
// //                 <div key={ship._id} className="col-12 col-md-6 col-lg-4">
// //                   <ShipCard
// //                     ship={ship}
// //                     onDelete={(id) =>
// //                       setShips((prev) => prev.filter((s) => s._id !== id))
// //                     }
// //                   />
// //                 </div>
// //               ))
// //             ) : (
// //               <div className="col-12 text-center py-5">
// //                 <p className="text-muted">No ships found. Try a different search or add a new ship.</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getShips } from "../api/api";
// import Navbar from "../components/Navbar";
// import ShipCard from "../components/ShipCard";
// import { Plus, Ship, Weight } from "lucide-react";

// export default function Dashboard() {
//   const [ships, setShips] = useState([]);
//   const [search, setSearch] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchShips = async () => {
//       try {
//         setIsLoading(true);
//         const { data } = await getShips();
//         setShips(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false); // stop loading
//       }
//     };
//     fetchShips();
//   }, []);

//   const filtered = ships.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center bg-light"
//       style={{
//         width: "100vw",
//         height: "100vh",
//         border: "2px solid red"
//       }}>
//       {/* Navbar */}
//       <Navbar search={search} setSearch={setSearch} />

//       {/* Main content - Centered with Bootstrap */}
//       <div
//         className="container-fluid"
//       >
//         <div className="col-12 col-lg-10 col-xl-8">
//           {/* Header and Add Button */}
//           <div className="row align-items-center mb-4">
//             <div className="col-md-8">
//               <h1 className="h2 mb-1 text-primary text-center text-md-start">Ship Dashboard</h1>
//               <p className="text-muted mb-0 text-center text-md-start">Manage your fleet of ships</p>
//             </div>
//             <div className="col-md-4 text-md-end mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end">
//               <button
//                 onClick={() => navigate("/add")}
//                 className="btn btn-primary d-inline-flex align-items-center"
//               >
//                 <Plus size={18} className="me-2" />
//                 Add New Ship
//               </button>
//             </div>
//           </div>

//           {/* Stats Overview */}
//           <div className="row mb-4 justify-content-center">
//             <div className="col-12">
//               <div className="card bg-primary text-white shadow-sm">
//                 <div className="card-body py-3">
//                   <div className="row text-center">
//                     <div className="col-4 border-end border-white-50">
//                       <h6 className="mb-1 opacity-75">Total Ships</h6>
//                       <h4 className="mb-0 fw-bold">{ships.length}</h4>
//                     </div>
//                     {/* <div className="col-4 border-end border-white-50">
//                       <h6 className="mb-1 opacity-75">Filtered</h6>
//                       <h4 className="mb-0 fw-bold">{filtered.length}</h4>
//                     </div> 
//                     {/* <div className="col-4">
//                       <h6 className="mb-1 opacity-75">Searching</h6>
//                       <h4 className="mb-0 fw-bold">{search ? "Active" : "Inactive"}</h4>
//                     </div> 
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>*/}

//                     <div className="row mb-4 justify-content-center">
//                       <div className="col-md-6 col-lg-4">
//                         <div className="card bg-primary text-white shadow-sm text-center">
//                           <div className="card-body py-3">
//                             <h6 className="mb-1 opacity-75">Total Ships</h6>
//                             <h4 className="mb-0 fw-bold">{ships.length}</h4>
//                           </div>
//                         </div>
//                       </div>
//                     </div>


//                     {/* Ship Cards - Scrollable area */}
//                     {isLoading ? (
//                       <div className="d-flex justify-content-center align-items-center flex-grow-1">
//                         <div className="spinner-border text-primary" role="status">
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="row g-4 justify-content-center" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 250px)' }}>
//                         {filtered.length > 0 ? (
//                           filtered.map((ship) => (
//                             <div key={ship._id} className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
//                               <ShipCard
//                                 ship={ship}
//                                 onDelete={(id) =>
//                                   setShips((prev) => prev.filter((s) => s._id !== id))
//                                 }
//                               />
//                             </div>
//                           ))
//                         ) : (
//                           <div className="col-12 d-flex align-items-center justify-content-center">
//                             <div className="card text-center py-5 w-100">
//                               <div className="text-muted mb-3">
//                                 <Ship size={48} />
//                               </div>
//                               <h5 className="card-title">No ships found</h5>
//                               <p className="card-text text-muted">
//                                 {search
//                                   ? "Try adjusting your search terms"
//                                   : "Get started by adding your first ship"
//                                 }
//                               </p>
//                               {!search && (
//                                 <button
//                                   onClick={() => navigate("/add")}
//                                   className="btn btn-primary mt-2"
//                                 >
//                                   <Plus size={18} className="me-2" />
//                                   Add New Ship
//                                 </button>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div >
//               );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShips } from "../api/api";
import Navbar from "../components/Navbar";
import ShipCard from "../components/ShipCard";
import { Plus, Ship } from "lucide-react";

export default function Dashboard() {
  const [ships, setShips] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShips = async () => {
      try {
        setIsLoading(true);
        const { data } = await getShips();
        setShips(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false); // stop loading
      }
    };
    fetchShips();
  }, []);

  const filtered = ships.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      {/* Navbar */}
      <Navbar search={search} setSearch={setSearch} />

      {/* Main content - Centered with Bootstrap */}
      <div className="container-fluid">
        <div className="col-12 col-lg-10 col-xl-8">
          {/* Header and Add Button */}
          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <h1 className="h2 mb-1 text-primary text-center text-md-start">
                Ship Dashboard
              </h1>
              <p className="text-muted mb-0 text-center text-md-start">
                Manage your fleet of ships
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end">
              <button
                onClick={() => navigate("/add")}
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <Plus size={18} className="me-2" />
                Add New Ship
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-primary text-white shadow-sm text-center">
                <div className="card-body py-3">
                  <h6 className="mb-1 opacity-75">Total Ships</h6>
                  <h4 className="mb-0 fw-bold">{ships.length}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Ship Cards - Scrollable area */}
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div
              className="row g-4 justify-content-center"
              style={{ overflowY: "auto", maxHeight: "calc(100vh - 250px)" }}
            >
              {filtered.length > 0 ? (
                filtered.map((ship) => (
                  <div
                    key={ship._id}
                    className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4"
                  >
                    <ShipCard
                      ship={ship}
                      onDelete={(id) =>
                        setShips((prev) => prev.filter((s) => s._id !== id))
                      }
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <div className="card text-center py-5 w-100">
                    <div className="text-muted mb-3">
                      <Ship size={48} />
                    </div>
                    <h5 className="card-title">No ships found</h5>
                    <p className="card-text text-muted">
                      {search
                        ? "Try adjusting your search terms"
                        : "Get started by adding your first ship"}
                    </p>
                    {!search && (
                      <button
                        onClick={() => navigate("/add")}
                        className="btn btn-primary mt-2"
                      >
                        <Plus size={18} className="me-2" />
                        Add New Ship
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
