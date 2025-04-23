# Visitor Counter Application

A multi-container application that tracks and displays the number of visitors to a website. The application consists of:

- **React Frontend**: Displays the visitor count
- **Express Backend**: API service to handle visitor count
- **Redis**: Database to store the visitor count

## Prerequisites

- Docker and Docker Compose
- Node.js and npm (for development)

## Running the Application

### Using Docker Compose

1. Clone this repository
2. Navigate to the project root directory
3. Run the following command:

```bash
docker-compose up
```

4. Access the application in your browser at `http://localhost:3000`

### Development Mode

#### Frontend

1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the frontend at `http://localhost:3000`

#### Backend

1. Navigate to the backend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The API will be available at `http://localhost:5000`

## API Endpoints

- `GET /api/visitors`: Returns and increments the visitor count

## Environment Variables

- Frontend:
  - `VITE_API_URL`: URL of the backend API (default: `http://localhost:5000`)

- Backend:
  - `PORT`: Port for the backend server (default: `5000`)
  - `REDIS_URL`: URL for the Redis server (default: `redis://localhost:6379`)
