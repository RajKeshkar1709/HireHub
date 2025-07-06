const interviewModel = require("../models/interview.model");
const userModel = require("../models/user.model");
const jobModel = require("../models/job.model");
const sendMail = require("../utils/sendMail");

const scheduleInterview = async (req, res) => {
  try {
    const { jobId, applicantId, interviewDate, mode, location, notes } = req.body;

    //  Step 1: Validate Applicant & Job
    

    const applicant = await userModel.findById(applicantId);
    //console.log("Looking for applicant with ID:", applicant);
    const job = await jobModel.findById(jobId);

    if (!applicant) return res.status(404).json({ message: "Applicant not found" });
    if (!job) return res.status(404).json({ message: "Job not found" });

    //  Step 2: Create Interview after validations
    const interview = await interviewModel.create({
      job: jobId,
      applicant: applicantId,
      recruiter: req.user.id, 
      interviewDate,
      mode,
      location,
      notes
    });

    //  Step 3: Send Mail
    await sendMail({
      from: 'rajkeshkar1709@gmail.com',
      to: applicant.email,
      subject: `Interview Scheduled for ${job.title}`,
      text: `Hi ${applicant.name},\n\nYour interview for the job "${job.title}" is scheduled on ${interviewDate} via ${mode}.\nLocation: ${location || 'Not provided'}\n\nRegards,\nHireHub Team`
    });

    res.status(201).json({ message: "Interview scheduled and email sent", interview });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = scheduleInterview;
