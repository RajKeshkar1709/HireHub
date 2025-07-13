require('dotenv').config()
const express = require("express")
const connectToDb = require("./config/db")
const authRoutes = require("./routes/auth.routes")
const auth  = require("./middleware/authMiddleware")
const jobRoutes = require("./routes/job.routes")
const ApplicationRoutes = require("./routes/application.routes")
const getRankRoute = require("./routes/getRank.route")
const interviewRoutes = require("./routes/interview.routes")
const feedbackRoutes = require("./routes/feedback.routes");
const referralRoutes = require("./routes/referral.routes")
const cors = require('cors');

const app = express()
connectToDb()
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/jobs",auth,jobRoutes)
app.use("/api/application",ApplicationRoutes)
app.use("/api/rank",getRankRoute)
app.use("/api/interview",interviewRoutes)
app.use("/api/feedback", feedbackRoutes)
app.use("/api/referral", referralRoutes)

app.get("/", (req, res) => {
  res.send("✅ HireHub API is running");
});

app.use(cors({
  origin: "http://localhost:5173", // allow any frontend origin (use specific URL in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server Started")
})


