const express = require("express");
const router = express.Router();
const giveFeedback = require("../controllers/feedback.controller");
const auth = require("../middleware/authMiddleware");

router.post("/give/:interviewId", auth, giveFeedback);

module.exports = router;
