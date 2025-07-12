🚀 HireHub Backend
HireHub is a modern recruitment platform's backend API built with Node.js, Express, and MongoDB. It enables secure user management, job postings, job applications, referrals, and interview scheduling — all through a scalable RESTful API.

🧰 Tech Stack
Node.js + Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt for password hashing

dotenv for environment config

Multer (optional for file uploads)

📁 Project Structure
bash
Copy
Edit
hirehub-backend/
│
├── controllers/         # Route handler logic
├── models/              # Mongoose schemas
├── routes/              # Express routes
├── middlewares/         # Auth & error handlers
├── utils/               # Helper functions
├── .env                 # Environment variables
├── server.js            # Entry point
└── README.md
🔐 Authentication & Roles
🔑 JWT-based login system

🔐 Role-based access control:

recruiter – post/manage jobs

jobseeker – browse/apply to jobs

🔗 API Endpoints
🔸 Auth Routes /api/auth
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Authenticate user

🔹 Job Routes /api/jobs
Method	Endpoint	Access	Description
POST	/	Recruiter	Post a new job
GET	/	Public	Get all jobs
GET	/:id	Public	Get job by ID
DELETE	/:id	Recruiter	Delete job (owner only)

🔸 Applications /api/applications
Method	Endpoint	Access	Description
POST	/	Jobseeker	Apply to a job
GET	/track	Jobseeker	View all applications

🧠 Additional Features (Modular)
/api/interviews → Interview scheduling

/api/feedback → Interview feedback

/api/referrals → Refer other candidates

📦 Installation
bash
git clone https://github.com/yourusername/hirehub-backend.git
cd hirehub-backend
npm install
Create a .env file in the root directory:

env
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

🚀 Run the Server
bash
npm run dev
Server runs on: http://localhost:3000

✅ Features
RESTful API with clean MVC architecture

Secure JWT login/register system

Recruiter vs Jobseeker role management

Smart job posting + applicant tracking

Scalable & well-structured codebase
