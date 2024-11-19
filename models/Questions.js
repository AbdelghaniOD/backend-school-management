const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  questionText: { type: String, required: true },
  options: [String],
  correctAnswer: Number // Index of the correct option
});

module.exports = mongoose.model('Question', QuestionSchema);
