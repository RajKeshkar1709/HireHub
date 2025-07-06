const express = require("express")
const router = express.Router()
const getCandidateRank = require("../controllers/getCandidateRank.controller")
const auth  = require("../middleware/authMiddleware")

router.get("/getRank/:jobId",auth,getCandidateRank)


module.exports = router