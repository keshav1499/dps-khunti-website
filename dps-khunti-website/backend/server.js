import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import announcementsRoutes from './routes/announcements.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: "https://dpskhunti2025.liveblog365.com", // allow frontend hosted on profreehost
  credentials: true
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('✅ DPS Khunti Backend Running');
});

app.get('/api/announcements', (req, res) => {
  res.json([
    { title: "Holiday Notice", content: "School closed on 16th April" },
    { title: "Annual Day", content: "Coming soon in May!" }
  ]);
});



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/announcements', announcementsRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
