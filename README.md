# 📝 ToDoApp-SolidJS

A modern, Todo application built with SolidJS, featuring a clean UI and full CRUD functionality.

## ✨ Features

- 🎯 **Full CRUD Operations** - Create, read, update, and delete tasks
- 🎨 **Modern UI** - Clean and responsive design
- ⚡ **SolidJS Frontend** - Fast and efficient reactive framework
- 🔧 **Json-Server Mock** - RESTful API with Json-Server
- 🐳 **Docker Support** - Easy deployment with Docker Compose
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend

- **SolidJS** - Reactive JavaScript framework
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Modern styling
- **DaisyUI** - Flexable UI libriary

### DevOps

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm
- Docker (optional)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/abdugaffor2004/ToDoApp-SolidJS.git
   cd ToDoApp-SolidJS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Docker Development

1. **Start with Docker Compose**

   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ToDoApp-SolidJS/
├── src/                   # Frontend source code
│   ├── components/        # Reusable UI components
│   ├── types/             # Application common types
│   ├── styles/            # CSS/SCSS files
│   └── utils/             # Utility functions
├── server/                # Backend API
│   ├── db.json            # API routes
│   └── Dockerfile         # Docker server image definition
├── scripts/               # Build and setup scripts
├── docker-compose.yml     # Docker services configuration
├── Dockerfile             # Docker client image definition
└── package.json           # Dependencies and scripts
```

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Docker

- `docker-compose up` - Start all services
- `docker-compose down` - Stop all services
- `docker-compose build` - Rebuild containers

## 🌐 API Endpoints

The backend provides RESTful API endpoints for todo management:

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update existing todo
- `DELETE /api/todos/:id` - Delete todo

## 🔧 Configuration

## 🚢 Deployment

### Production Build

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service

### Docker Production

1. **Build production image**

   ```bash
   docker build -t todoapp-solidjs .
   ```

2. **Run production container**
   ```bash
   docker run -p 80:80 todoapp-solidjs
   ```
