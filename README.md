# fe-microservices
```plaintext
# Root Folder Structure
/project-root
├── principal/
├── hod/
├── teacher/
├── student/
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── Makefile
└── README.md

# README.md
# Frontend Microservices Project

This project is a collection of four frontend microservices (`principal`, `hod`, `teacher`, `student`) built with React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit. Each microservice provides a dashboard for different user roles in an educational institution. The project uses Docker and Docker Compose to manage the services.

## Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 18 or higher
- **Docker**: Latest version
- **Docker Compose**: Latest version
- **Make**: For running Makefile commands

Verify installations:
```bash
node --version
docker --version
docker compose version
make --version
```

## Project Structure

- `principal/`: Dashboard for the principal role (port 3001)
- `hod/`: Dashboard for the Head of Department role (port 3002)
- `teacher/`: Dashboard for the teacher role (port 3003)
- `student/`: Dashboard for the student role (port 3004)
- `docker-compose.dev.yml`: Configuration for development environment
- `docker-compose.prod.yml`: Configuration for production environment
- `Makefile`: Commands for building and running services

## Setup Instructions

### 1. Clone or Extract the Project
Extract the project zip or clone the repository to your local machine.

### 2. Install Dependencies
Each microservice requires Node.js dependencies, including `autoprefixer`, to be installed locally to ensure Tailwind CSS works correctly in the development environment.

Run the following command from the project root to install dependencies for all microservices:
```bash
for dir in principal hod teacher student; do
  cd $dir
  rm -rf node_modules package-lock.json
  npm install
  cd ..
done
```

This ensures that `node_modules` includes `autoprefixer`, which is required by `postcss.config.cjs`.

### 3. Build and Run in Development Mode
Use the `Makefile` to build and run the services in development mode with Docker Compose.

1. Clear any existing Docker containers and images:
```bash
docker compose -f docker-compose.dev.yml down -v
docker system prune -f
```

2. Build the Docker images without cache:
```bash
docker compose -f docker-compose.dev.yml build --no-cache
```

3. Start the services:
```bash
make dev
```

This will start all microservices, each running a Vite development server:
- Principal: `http://localhost:3001`
- HOD: `http://localhost:3002`
- Teacher: `http://localhost:3003`
- Student: `http://localhost:3004`

### 4. Verify the Application
Open a browser and navigate to the above URLs to access each dashboard. Verify that:
- The dashboard loads with a sidebar, header, and content area.
- Tailwind CSS styles are applied (e.g., blue sidebar for Principal with `bg-blue-800`, green for HOD with `bg-green-800`, etc.).
- Use browser developer tools (F12) to confirm that `index.css` is loaded and contains Tailwind styles.

### 5. Run in Production Mode
To run in production mode (serves built assets):
```bash
make prod
```

This uses `docker-compose.prod.yml` to start the services with `npm run preview`.

### 6. Stop the Services
To stop the services:
```bash
make stop
```

To stop and remove containers, volumes, and images:
```bash
make clean
```

## Troubleshooting

### Issue: `Cannot find module 'autoprefixer'`
If you see this error when running `make dev`:
1. Verify that `autoprefixer` is installed locally:
```bash
cd principal
npm list autoprefixer
```
Repeat for `hod`, `teacher`, and `student`. If missing, run:
```bash
npm install
```
2. Rebuild and restart:
```bash
docker compose -f docker-compose.dev.yml down -v
docker system prune -f
docker compose -f docker-compose.dev.yml build --no-cache
make dev
```
