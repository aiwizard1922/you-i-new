# Contact Form Backend

Stores contact form submissions (name, email, phone, message) in a SQLite database.

## Setup

```bash
cd backend
npm install
npm start
```

The API runs at `http://localhost:3001`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit a contact form |
| GET | `/api/contact` | Get all submissions (for admin) |

## Database

- **File**: `contact.db` (SQLite, created automatically)
- **Table**: `contact_submissions`
  - `id` - Auto-increment
  - `name` - User's name
  - `email` - User's email
  - `phone` - User's phone (optional)
  - `message` - Their message
  - `created_at` - Timestamp

## Production

For production, set `REACT_APP_API_URL` in your frontend to your deployed backend URL. Consider switching to PostgreSQL for multi-server deployments.
