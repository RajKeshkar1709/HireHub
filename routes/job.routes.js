const express = require("express")
const router = express.Router()
const {createJob,findJob} = require("../controllers/jobController")

router.post("/createJob",createJob)
router.get("/findJob",findJob)

module.exports = router
