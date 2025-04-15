import { useState } from "react";

export function Announcements() {
  const [announcements, setAnnouncements] = useState([
    "School reopens on June 15",
    "Annual Sports Day on July 10"
  ]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Latest Announcements</h2>
      <ul className="mt-4">
        {announcements.map((announcement, index) => (
          <li key={index} className="p-2 border-b">{announcement}</li>
        ))}
      </ul>
    </div>
  );
}
