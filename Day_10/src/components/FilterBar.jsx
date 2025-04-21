import React from 'react';

const EVENTS = [
  'PushEvent',
  'PullRequestEvent',
  'IssuesEvent',
  'ForkEvent',
];

export default function FilterBar({ filters, onToggle }) {
  return (
    <div className="flex gap-4 mb-4">
      {EVENTS.map(type => (
        <label key={type} className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-1"
            checked={filters[type]}
            onChange={() => onToggle(type)}
          />
          {type.replace('Event', '')}
        </label>
      ))}
    </div>
  );
}