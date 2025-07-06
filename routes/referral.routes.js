const express = require("express");
const router = express.Router();
const { referCandidate, updateReferralStatus } = require("../controllers/referral.controller");
const auth = require("../middleware/authMiddleware");

router.post("/refer", auth, referCandidate)
router.patch("/update", auth, updateReferralStatus)

module.exports = router;
