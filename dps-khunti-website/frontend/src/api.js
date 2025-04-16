// src/api.js
const BASE_URL = "https://dps-khunti-website.onrender.com"; // change this to your backend URL

export async function getAnnouncements() {
  const response = await fetch(`${BASE_URL}/api/announcements`);
  if (!response.ok) {
    throw new Error("Failed to fetch announcements");
  }
  return response.json();
}

export async function loginUser(credentials) {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}
