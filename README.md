# Assignment 1 : Task Manager API

A RESTful API for managing tasks built with Node.js and Express.

## Features

- Create, read, update, and delete tasks
- JSON file-based storage
- Input validation using Zod
- Comprehensive test suite

## Prerequisites

- Node.js >= 18.0.0

## Installation

```bash
npm install
```

## Usage

### Start the server

```bash
npm start
```

### Development mode (with auto-reload)

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| GET    | `/tasks/:id` | Get a task by ID    |
| POST   | `/tasks`     | Create a new task   |
| PUT    | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

## Testing

```bash
npm test
```

## Project Structure

```
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── controllers/        # Request handlers
├── models/             # Data models and schemas
├── routes/             # API routes
└── test/               # Test files
```

## License

MIT © 2025 Ahsas Sharma
