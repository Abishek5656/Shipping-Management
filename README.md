# 🚢 Shipping Management System

A full-stack **Ship Management System** built with **Node.js + Express + MongoDB (backend)** and **React + Vite + TailwindCSS (frontend)**.  
The system supports **JWT authentication**, CRUD operations for ships, and API testing with **Postman**.  

---

## 🌐 Live Demo
- **Frontend (Netlify):** [https://shippingmanagement.netlify.app/](https://shippingmanagement.netlify.app/)  
- **Backend (Render):** [https://shipping-management-oell.onrender.com](https://shipping-management-ggq2.onrender.com)  
- **Postman Documentation:** [Shipping API Postman Docs](https://documenter.getpostman.com/view/29785161/2sB3HqJe99)

---

## 📌 Features
### Backend
- RESTful API with endpoints:
  - `POST /auth/register` → Register user  
  - `POST /auth/login` → Login user (returns JWT)  
  - `GET /ships` → Fetch all ships  
  - `POST /ships` → Add new ship (JWT required)  
  - `GET /ships/:id` → Fetch specific ship  
  - `PUT /ships/:id` → Update ship (JWT required)  
  - `DELETE /ships/:id` → Delete ship (JWT required)  
- MongoDB database with Mongoose models  
- Validation using **Joi**  
- Logging using **Winston**  
- Rate limiting with **express-rate-limit**  
- Authentication using **JWT**

### Frontend
- Built with **Vite + React + TailwindCSS**  
- **React Router DOM** for navigation  
- **Pages:**
  - Login Page  
  - Home Page (Dashboard) → shows all ships in **Card format**  
  - Edit Ship Page → update ship details by `_id`  
  - Add Ship Page → create new ship  
- **Features:**
  - Protected routes (only logged-in users can access dashboard)  
  - Navbar with Search + Logout  
  - Ships displayed in responsive **Card grid**  
  - Edit & Delete buttons on each card  
  - Add Ship button to create new ships  

---

backend/
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── shipController.js
│ ├── middleware/
│ │ ├── auth.js
│ │ └── errorHandler.js
│ ├── models/
│ │ ├── Ship.js
│ │ └── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── shipRoutes.js
│ └── server.js
├── package.json

### Frontend

frontend/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── ShipCard.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Home.jsx
│ │ ├── AddShip.jsx
│ │ └── EditShip.jsx
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json

```bash
git clone <your-repo-url>


Backend Setup
cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

npm run dev

Frontend Setup
cd frontend
npm install

npm run dev

Postman collection: -> https://documenter.getpostman.com/view/29785161/2sB3HqJe99

Test cases include:

✅ GET /ships → returns 200 OK

✅ POST /ships → returns 201 Created

✅ GET /ships/:id → returns 404 if not found

✅ PUT /ships/:id → updates ship, returns 200

✅ DELETE /ships/:id → deletes ship, returns 200


🔑 Authentication Flow

Register via POST /auth/register

Login via POST /auth/login → get JWT token

Use JWT in Authorization: Bearer <token> header for protected routes

📦 Required NPM Packages

Backend

npm install express mongoose dotenv cors joi bcrypt jsonwebtoken express-rate-limit winston
npm install -D nodemon


