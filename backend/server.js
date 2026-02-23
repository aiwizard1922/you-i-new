const express = require('express');
const cors = require('cors');
const { initDatabase, addSubmission, getAllSubmissions } = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - allow all origins in dev (React may run on 3000, 3001, etc.)
app.use(cors());
app.use(express.json());

// Initialize database on startup
initDatabase();

// Root route - friendly message when visiting the API URL
app.get('/', (req, res) => {
  res.json({
    message: 'U & I Salon Contact API',
    endpoints: {
      'POST /api/contact': 'Submit a contact form',
      'GET /api/contact': 'Retrieve all contact submissions',
    },
  });
});

// POST /api/contact - Submit contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required',
      });
    }

    const id = addSubmission({ name, email, phone, message });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us. We\'ll get back to you soon!',
      id,
    });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to save your message. Please try again.',
    });
  }
});

// GET /api/contact - Retrieve all submissions (for admin/dashboard)
app.get('/api/contact', (req, res) => {
  try {
    const submissions = getAllSubmissions();
    res.json({ success: true, data: submissions });
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch submissions',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`);
});
