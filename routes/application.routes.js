const express = require("express")
const router = express.Router()
const {FillApplication,track} = require("../controllers/applicationController")
const auth  = require("../middleware/authMiddleware")

router.post("/fillApplication",auth,FillApplication)
router.get("/track",auth,track)

module.exports = router