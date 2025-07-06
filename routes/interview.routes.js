const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const scheduleInterview = require("../controllers/interviewScheduler.controller");

router.post("/schedule", auth, scheduleInterview);

module.exports = router;
