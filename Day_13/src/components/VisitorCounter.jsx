import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the environment variable if available, otherwise fallback to localhost
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  
  console.log('Using API URL:', API_URL);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        setLoading(true);
        console.log('Fetching from:', `${API_URL}/api/visitors`);
        const response = await fetch(`${API_URL}/api/visitors`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Ensure credentials are included if needed
          credentials: 'same-origin'
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }
        
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
        setError('Failed to load visitor count. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, [API_URL]);

  if (loading) return <p>Loading visitor count...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="visitor-counter">
      <h2>Visitor Counter</h2>
      <div className="count-display">
        <p>You are visitor number:</p>
        <span className="count">{visitorCount}</span>
      </div>
    </div>
  );
};

export default VisitorCounter; 