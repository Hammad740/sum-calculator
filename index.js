const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());

// Basic GET route for testing
app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'All great!',
  });
});

// POST route to calculate the sum
app.post('/sum', (req, res) => {
  const { a, b } = req.body;

  // Check if a and b are valid numbers
  if (typeof a === 'number' && typeof b === 'number') {
    const sum = a + b;
    res.json({ sum });
  } else {
    console.error('Invalid input:', req.body);
    res.status(400).json({
      error: 'Invalid input. Please send two numbers.',
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
