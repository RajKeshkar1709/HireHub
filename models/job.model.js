const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  skills: [String],
  deadline: Date,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const jobModel = mongoose.model("Jobs",jobSchema)

module.exports = jobModel
