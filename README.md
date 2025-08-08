
# README.md
# Frontend Microservices Project

This project is a collection of four frontend microservices (`principal`, `hod`, `teacher`, `student`) built with React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit. Each microservice provides a dashboard for different user roles in an educational institution. A single `package.json` at the project root manages dependencies, reducing build time and container size.

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
- `package.json`: Shared dependencies for all microservices
- `node_modules/`: Shared dependency installation
- `docker-compose.dev.yml`: Configuration for development environment
- `docker-compose.prod.yml`: Configuration for production environment
- `Makefile`: Commands for building and running services

## Setup Instructions

### 1. Clone or Extract the Project
Extract the project zip or clone the repository to your local machine.

### 2. Install Dependencies
Dependencies are managed in the root `package.json`. Install them once:

```bash
rm -rf node_modules package-lock.json
npm install
```

This creates a shared `node_modules` directory at the project root, including `autoprefixer` for Tailwind CSS.

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
- Tailwind CSS styles are applied (e.g., blue sidebar for Principal with `bg-blue-800`, green for HOD with `bg-green-800`, purple for Teacher with `bg-purple-800`, indigo for Student with `bg-indigo-800`).
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

### Issue: `ENOENT: no such file or directory, open '/app/package.json'`
If you see this error during `docker compose build`:
1. Ensure the root `package.json` exists:
```bash
ls package.json
```
2. Verify the `Dockerfile` copies the root `package.json`:
```dockerfile
COPY /package.json ./
```
3. Rebuild without cache:
```bash
docker compose -f docker-compose.dev.yml down -v
docker system prune -f
docker compose -f docker-compose.dev.yml build --no-cache
make dev
```

### Issue: `Cannot find module 'autoprefixer'`
If you see this error when running `make dev`:
1. Verify that `autoprefixer` is installed in the root `node_modules`:
```bash
npm list autoprefixer
```
If missing, run:
```bash
npm install
```
2. Check that `docker-compose.dev.yml` mounts the shared `node_modules`:
```yaml
- ./node_modules:/app/node_modules
```
3. Rebuild and restart:
```bash
docker compose -f docker-compose.dev.yml down -v
docker system prune -f
docker compose -f docker-compose.dev.yml build --no-cache
make dev
```

### Issue: Tailwind CSS Styles Not Applied
- Open browser developer tools (F12) and check if `index.css` is loaded.
- Verify that classes like `bg-blue-800` (Principal), `bg-green-800` (HOD), `bg-purple-800` (Teacher), or `bg-indigo-800` (Student) are applied to the sidebar.
- Ensure `tailwind.config.js` in each microservice includes:
```javascript
content: ['./src/**/*.{js,jsx,ts,tsx}']
```
- Confirm `postcss.config.cjs` includes:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Issue: Docker Build Fails
- Check Docker logs:
```bash
docker compose -f docker-compose.dev.yml logs
```
- Ensure `node:18-alpine` image is available:
```bash
docker pull node:18-alpine
```

### Issue: Services Not Accessible
- Confirm ports are not in use:
```bash
netstat -tuln | grep 300
```
- Check container status:
```bash
docker ps -a
```

## Development Notes
- **Live Reloading**: In development mode, changes to `src/`, `public/`, or configuration files are reflected due to volume mounts in `docker-compose.dev.yml`.
- **Shared Dependencies**: All microservices use the same dependencies from the root `package.json` and `node_modules`.
- **Customization**: Modify `src/` files in each microservice to add features to the dashboards.

## Contact
For issues or questions, please refer to the project documentation or contact the maintainer.

# Other Files (Unchanged)
# principal/src/, hod/src/, teacher/src/, student/src/
# principal/public/index.html, postcss.config.cjs, tailwind.config.js, vite.config.ts, etc.
# (All remain identical to the previous artifact)
