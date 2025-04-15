import { useState } from "react";

export function AdminPanel() {
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  const addAnnouncement = () => {
    setAnnouncements([...announcements, announcement]);
    setAnnouncement("");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <input 
        type="text" 
        placeholder="New Announcement" 
        className="border p-2 m-2" 
        value={announcement} 
        onChange={(e) => setAnnouncement(e.target.value)} 
      />
      <button onClick={addAnnouncement} className="bg-blue-500 text-white p-2 rounded">Add</button>
      <ul className="mt-4">
        {announcements.map((a, index) => (
          <li key={index} className="p-2 border-b">{a}</li>
        ))}
      </ul>
    </div>
  );
}
