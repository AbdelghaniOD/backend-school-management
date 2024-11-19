const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  schedule: Date,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exam', ExamSchema);
