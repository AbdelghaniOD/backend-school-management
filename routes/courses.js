const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Course = require('../models/Course');

// POST /courses - Add a new course
router.post('/', auth, async (req, res) => {
  const { courseName, description, duration } = req.body;

  if (!courseName || !description || !duration) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const newCourse = new Course({
      courseName,
      description,
      duration,
      createdBy: req.user.id, // Authenticated user ID from middleware
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
