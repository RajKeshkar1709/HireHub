const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  interviewDate: Date,
  mode: { type: String, enum: ['online', 'offline'], default: 'online' },
  location: String,
  notes: String,
  feedback: {
    rating: Number, 
    comment: String
  }
})
const interviewModel =  mongoose.model("Interview", interviewSchema);

module.exports = interviewModel