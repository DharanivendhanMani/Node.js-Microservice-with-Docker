# Node.js Microservice with Docker

A small Express.js microservice that runs locally or inside a Docker container.

## Requirements

- Node.js 22 or later
- npm
- Docker Desktop, for containerized usage

## Project Structure

```text
.
├── app.js
├── Dockerfile
├── package.json
└── package-lock.json
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the service:

```bash
npm start
```

The service listens on port `3000` by default. Open:

```text
http://localhost:3000
```

## Build the Docker Image

Run this command from the project directory:

```bash
docker build -t node-express-docker .
```

## Run the Container

```bash
docker run -d --name node-express-docker -p 3000:3000 node-express-docker
```

Verify the service:

```bash
curl http://localhost:3000/
```

Expected response:

```json
{
  "status": "success",
  "message": "Hello from inside the Docker container!",
  "timestamp": "2026-09-10T00:00:00.000Z"
}
```

The timestamp is generated dynamically for each request.

## Container Commands

View running containers:

```bash
docker ps
```

View application logs:

```bash
docker logs node-express-docker
```

Stop the container:

```bash
docker stop node-express-docker
```

Remove the container:

```bash
docker rm node-express-docker
```

To replace an existing container after rebuilding:

```bash
docker rm -f node-express-docker
docker run -d --name node-express-docker -p 3000:3000 node-express-docker
```

## API

### `GET /`

Returns a JSON health-style response confirming that the microservice is running.
