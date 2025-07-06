const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resume: String,
  coverLetter: String,
  status: { type: String, enum: ['applied', 'shortlisted', 'hired'], default: 'applied' }
});


const applicationModel =  mongoose.model('Application', applicationSchema);
module.exports = applicationModel

