import express from 'express';
import Announcement from '../models/Announcement.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, content } = req.body;
    const newAnnouncement = new Announcement({ title, content });
    await newAnnouncement.save();
    res.json({ message: "Announcement Added" });
});

router.get('/list', async (req, res) => {
    const announcements = await Announcement.find();
    res.json(announcements);
});

export default router;
