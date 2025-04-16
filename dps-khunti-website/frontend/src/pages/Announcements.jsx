import React, { useEffect, useState } from 'react';
import { getAnnouncements } from '../api';

export function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements()
      .then(setAnnouncements)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">School Announcements</h1>
      {announcements.map((a, index) => (
        <div key={index} className="bg-gray-100 my-2 p-3 rounded">
          <h2 className="text-lg font-semibold">{a.title}</h2>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
}
