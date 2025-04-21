import React from 'react';
import ActivityItem from './ActivityItem';

export default function ActivityList({ events, filters }) {
  const filtered = events.filter(e => filters[e.type]);
  return (
    <div>
      {filtered.length
        ? filtered.map(e => <ActivityItem key={e.id} event={e} />)
        : <p>No events match your filters.</p>
      }
    </div>
  );
}