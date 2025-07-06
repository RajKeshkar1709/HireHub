const jobModel = require("../models/job.model")

const createJob = async (req,res)=>{
    if (req.user.role !== "recruiter") {
      return res.status(403).json({ message: "Only recruiters can post jobs." });
    }

    const job = await jobModel.create({ ...req.body, postedBy: req.user.id });
    res.status(201).json(job)
}

const findJob = async (req,res)=>{
    try {
    
    if (req.user.role !== "jobseeker") {
      return res.status(403).json({ message: "Only jobseekers can view jobs." });
    }

    const jobs = await jobModel.find()
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}

module.exports = {createJob,findJob}

