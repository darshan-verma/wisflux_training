import React, { useState, useEffect } from 'react';
import { fetchEvents } from './services/github';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ActivityList from './components/ActivityList';

export default function App() {
  const [username, setUsername] = useState('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  const initialFilters = {
    PushEvent: true,
    PullRequestEvent: true,
    IssuesEvent: true,
    ForkEvent: true,
  };
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    if (!username) return;
    setError('');
    fetchEvents(username)
      .then(data => setEvents(data))
      .catch(err => setError(err.message));
  }, [username]);

  function handleSearch(user) {
    setUsername(user);
  }

  function toggleFilter(type) {
    setFilters(f => ({ ...f, [type]: !f[type] }));
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Activity Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {events.length > 0 && (
        <>
          <FilterBar filters={filters} onToggle={toggleFilter} />
          <ActivityList events={events} filters={filters} />
        </>
      )}
    </div>
  );
}
