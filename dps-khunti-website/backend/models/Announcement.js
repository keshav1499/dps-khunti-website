import mongoose from 'mongoose';

const AnnouncementSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Announcement', AnnouncementSchema);
