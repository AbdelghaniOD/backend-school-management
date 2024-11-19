const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// POST /api/questions - Add a new question
router.post('/', auth, async (req, res) => {
  const { questionText, courseId, options, correctOption } = req.body;

  try {
    const question = new Question({
      questionText,
      courseId,
      options,
      correctOption,
    });
    await question.save();
    res.json({ msg: 'Question added successfully', questionId: question.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
