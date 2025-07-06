const interviewModel = require("../models/interview.model");

const giveFeedback = async (req, res) => {
  try {
    const { interviewId } = req.params;
    const { comment, rating } = req.body;

    const interview = await interviewModel.findById(interviewId);
    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    // Save feedback
    interview.feedback = {
      comment,
      rating
    };

    await interview.save();

    res.status(200).json({ message: "Feedback saved successfully", feedback: interview.feedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = giveFeedback;
