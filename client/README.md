# Lead Management CRM (MERN Stack)

A full-stack Lead Management CRM application built using **React, Node.js, Express, and MongoDB**.  
It allows users to manage customer leads with authentication, status tracking, search, and filtering.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected routes

### Lead Management
- Create new leads
- View all leads (dashboard)
- Update lead details
- Delete leads
- Update lead status (New, Contacted, Qualified, Converted, Lost)

### Advanced Features
- Search leads (by name, email, company)
- Filter leads by status
- Status dashboard cards
- User-specific data isolation
- Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM
- Plain CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js

## 📁 Project Structure
client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── styles/
│ └── App.jsx

server/
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/sumitjadhav128/Lead-Management-CRM

2. Backend setup
cd server
npm install
Create .env file inside server/
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend
npm start

3. Frontend setup
cd client
npm install
Run frontend
npm run dev
🔗 API Endpoints
Auth Routes
POST /api/auth/register → Register user

POST /api/auth/login → Login user

Lead Routes (Protected)
GET /api/leads → Get all leads

POST /api/leads → Create lead

PUT /api/leads/:id → Update lead

DELETE /api/leads/:id → Delete lead

Supports query params:

?search= → Search leads

?status= → Filter by status

🔐 Authentication Flow
User registers or logs in

JWT token is generated

Token is stored in localStorage

Token is sent in request headers

Backend verifies token before allowing access

📊 Lead Status Types
new

contacted

qualified

converted

lost

🧠 Key Learning
MERN stack CRUD application

JWT authentication & authorization

REST API design

MongoDB data modeling

React state management

Protected routes

UI/UX structuring

📸 Screenshots (Optional)
Add screenshots here:

Dashboard

Login page

Register page

🚀 Future Improvements
Role-based access (Admin/User)

Pagination

Drag & drop pipeline (Kanban view)

Email integration

Analytics dashboard