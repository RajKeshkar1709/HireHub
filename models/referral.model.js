const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  referrer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Who referred
  referredCandidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Candidate
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Jobs", required: true },
  status: { type: String, enum: ["pending", "hired", "rejected"], default: "pending" },
  rewardGiven: { type: Boolean, default: false }
}, { timestamps: true });

const ReferralModel = mongoose.model("Referral", referralSchema);
module.exports = ReferralModel;
