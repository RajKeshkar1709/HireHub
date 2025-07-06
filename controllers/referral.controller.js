const referralModel = require("../models/referral.model");

const referCandidate = async (req, res) => {
  try {
    const { referredCandidateId, jobId } = req.body;

    const existingReferral = await referralModel.findOne({
      referrer: req.user.id,
      referredCandidate: referredCandidateId,
      job: jobId
    });

    if (existingReferral) {
      return res.status(400).json({ message: "Already referred this candidate for this job" });
    }

    const referral = await referralModel.create({
      referrer: req.user.id,
      referredCandidate: referredCandidateId,
      job: jobId
    });

    res.status(201).json({ message: "Referral successful", referral });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update referral when candidate is hired
const updateReferralStatus = async (req, res) => {
  try {
    const { referralId, status } = req.body;

    const referral = await referralModel.findById(referralId);
    if (!referral) return res.status(404).json({ message: "Referral not found" });

    referral.status = status;

    if (status === "hired") {
      referral.rewardGiven = true;
    } else {
      referral.rewardGiven = false;
    }

    await referral.save();

    res.json({ message: "Referral updated", referral });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { referCandidate, updateReferralStatus };
