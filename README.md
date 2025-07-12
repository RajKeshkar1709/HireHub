HireHub – Backend API
HireHub is a recruitment platform backend built using Node.js, Express.js, and MongoDB. It provides secure RESTful APIs for user registration, login, job posting, application management, interview scheduling, feedback, and referrals.

🛠 Tech Stack
Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Token)

bcrypt.js

Multer (for optional file uploads)

CORS, dotenv

📁 Project Structure
bash
Copy
Edit
hirehub-backend/
├── controllers/
│   ├── authController.js
│   ├── jobController.js
│   ├── applicationController.js
│   └── ...
├── models/
│   ├── User.js
│   ├── Job.js
│   ├── Application.js
│   └── ...
├── routes/
│   ├── authRoutes.js
│   ├── jobRoutes.js
│   └── ...
├── middlewares/
│   ├── auth.js
│   └── errorHandler.js
├── .env
├── server.js
└── README.md
🔐 Authentication
JWT-based authentication with login & register endpoints.

Role-based access: recruiter, jobseeker.

📌 API Endpoints
Auth Routes – /api/auth
Method	Route	Description
POST	/register	Register user
POST	/login	Login and get JWT

Job Routes – /api/jobs
Method	Route	Description
POST	/	Post a new job (recruiter only)
GET	/	Get all jobs
GET	/:id	Get single job
DELETE	/:id	Delete job (owner only)

Application Routes – /api/applications
Method	Route	Description
POST	/	Apply to a job
GET	/track	Track all applications

Interviews, Feedback, Referrals
Add-on routes depending on the module structure:

/api/interviews

/api/feedback

/api/referrals

⚙️ Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret_key
🚀 Run the Project
bash
Copy
Edit
npm install
npm run dev
Server runs on http://localhost:3000

✅ Features
Secure authentication with hashed passwords

Recruiter & Jobseeker roles

Post & manage jobs

Apply to jobs

Track applications

Scalable MVC structure

📌 Future Enhancements
Email notifications

Admin dashboard

Resume upload (Multer)

AI-based resume matching
