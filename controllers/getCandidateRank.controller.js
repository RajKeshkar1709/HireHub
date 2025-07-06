const applicationModel = require("../models/application.model")
const userModel = require("../models/user.model")
const qualificationScore = {
  'PhD': 3,
  'M.Tech': 2,
  'B.Tech': 1,
  'Diploma': 0.5
};

const getCandidateRank = async (req, res) => {
  try {
    const { jobId } = req.params;

    const applications = await applicationModel.find({ job: jobId });

    const ranked = [];

    for (let app of applications) {
      const user = await userModel.findById(app.applicant);

      const experience = user.profile?.experience || 0;
      const qualification = user.profile?.qualification || '';
      const skills = user.profile?.skills || [];

      const skillScore = skills.length;
      const expScore = experience * 1.5; 
      const qualScore = qualificationScore[qualification] || 0;

      const totalScore = skillScore + expScore + qualScore;

      ranked.push({
        applicantId: user._id,
        name: user.name,
        email: user.email,
        skills,
        experience,
        qualification,
        totalScore
      });
    }

    const sorted = ranked.sort((a, b) => b.totalScore - a.totalScore);

    res.json(sorted.slice(0, 5)); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = getCandidateRank