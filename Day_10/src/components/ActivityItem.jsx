import React from 'react';

export default function ActivityItem({ event }) {
  const { type, repo, created_at: date, payload } = event;
  return (
    <div className="border rounded p-4 mb-2">
      <div className="text-sm text-gray-600">{new Date(date).toLocaleString()}</div>
      <div className="font-semibold">{repo.name}</div>
      <div>{type}</div>
    </div>
  );
}
