const BASE = 'https://api.github.com';
export async function fetchEvents(username) {
  const res = await fetch(`${BASE}/users/${username}/events`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}