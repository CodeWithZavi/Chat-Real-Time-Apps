# Chat-Real-Time-Apps

This repository contains two separate chat app implementations: a full-stack real-time app and a standalone React client prototype. Each lives in its own folder with its own setup.

## Projects

- **ChattingApp**: Full-stack real-time chat with Node.js/Express, MongoDB, Redis, Socket.io, and a Vite/React frontend. See [ChattingApp/README.md](ChattingApp/README.md) for full details.
- **chatapp client**: Vite + React UI/client with Tailwind CSS, Framer Motion, Socket.io client, and animation/3D libraries. See [chatapp/chatapp/README.md](chatapp/chatapp/README.md).

## Quick Start

### ChattingApp (full stack)

**Docker (recommended)**

```bash
cd ChattingApp
docker-compose up --build
```

Default ports from docker-compose:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017
- Redis: redis://localhost:6379

For non-Docker setup and environment variables, follow [ChattingApp/README.md](ChattingApp/README.md).

### chatapp client (frontend-only)

```bash
cd chatapp/chatapp
npm install
npm run dev
```

Optional environment variables (create a local `.env` if needed):

```
VITE_API_BASE_URL=http://localhost:3001
VITE_SOCKET_URL=http://localhost:3001
```

Defaults are defined in [chatapp/chatapp/src/config.js](chatapp/chatapp/src/config.js).

## Notes

- The two apps are independent and can be run separately.
- If you run both, adjust ports to avoid collisions (both default to 5173 on Vite).
