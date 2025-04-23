import express from 'express';
import cors from 'cors';
import { createClient } from 'redis';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - configure CORS to allow requests from any origin
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Redis client setup
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

let redisClient;

async function connectRedis() {
  redisClient = createClient({
    url: REDIS_URL
  });

  redisClient.on('error', (err) => {
    console.error('Redis error:', err);
  });

  await redisClient.connect();
  console.log('Connected to Redis');
}

// Routes
app.get('/', (req, res) => {
  res.send('Visitors Count API');
});

app.get('/api/visitors', async (req, res) => {
  try {
    // Increment visitor count
    const count = await redisClient.incr('visitors');
    res.json({ count });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, async () => {
  await connectRedis();
  console.log(`Server running on port ${PORT}`);
}); 