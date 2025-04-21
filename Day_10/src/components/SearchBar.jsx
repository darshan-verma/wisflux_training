import React, { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('ghHistory') || '[]');
    setHistory(saved);
  }, []);

  function handleSearch() {
    if (!input) return;
    onSearch(input);
    const updated = [input, ...history.filter(u => u !== input)].slice(0, 5);
    setHistory(updated);
    localStorage.setItem('ghHistory', JSON.stringify(updated));
  }

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 flex-grow mr-2"
        value={input}
        onChange={e => setInput(e.target.value)}
        list="history"
        placeholder="GitHub username"
      />
      <datalist id="history">
        {history.map(u => <option key={u} value={u} />)}
      </datalist>
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4">
        Search
      </button>
    </div>
  );
}