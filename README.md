# SGuard Project

SGuard is a comprehensive Discord security and moderation platform that includes an intelligent bot, a robust API, and a modern web interface.

## 🏗️ Monorepo Architecture

This project is organized as a monorepo containing three main components:

```
sguard-project/
├── api/          # Backend server (Express.js + TypeScript)
├── bot/          # Discord Bot (DiscordX + TypeScript)
├── frontend/     # Web interface (React/Next.js + TypeScript)
└── shared/       # Shared code between projects
```

## 🚀 Features

### 🤖 Discord Bot
- **Automatic moderation** with intelligent content analysis
- **Moderation commands** for administrators
- **Configurable sanctions system**
- **Keyword detection** in multiple languages
- **Sentiment and toxicity analysis**

### 🌐 API Backend
- **RESTful API** for configuration management
- **OAuth2 authentication** with Discord
- **Guild and user management**
- **Per-server moderation configuration**
- **Action logging and auditing**

### 💻 Web Frontend
- **Intuitive admin dashboard**
- **Visual configuration** of moderation parameters
- **Real-time statistics and metrics**
- **User and permission management**
- **Responsive and modern interface**

## 🛠️ Technologies

- **TypeScript** - Primary language
- **Node.js** - JavaScript runtime
- **Discord.js** - Library for Discord interaction
- **DiscordX** - Framework for Discord bots
- **Express.js** - Web framework for the API
- **React/Next.js** - Frontend framework
- **PostgreSQL** - Primary database
- **Docker** - Containerization

## 📦 Installation and Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danielvflores/SGuard.git
   cd sguard-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   # Copy example files
   cp api/.env.example api/.env
   cp bot/.env.example bot/.env
   cp frontend/.env.example frontend/.env.local
   ```

4. **Configure variables according to your environment**

## 🏃‍♂️ Available Scripts

### Global Commands

```bash
# Install all dependencies
npm run install:all

# Build all projects
npm run build

# Development mode (all services)
npm run dev

# Production mode (all services)
npm run start

# Clean generated files
npm run clean

# Run tests
npm run test

# Linting
npm run lint
```

### Per-Project Commands

```bash
# API
npm run dev:api
npm run build:api
npm run start:api

# Bot
npm run dev:bot
npm run build:bot
npm run start:bot

# Frontend
npm run dev:frontend
npm run build:frontend
npm run start:frontend
```

## 🔧 Development Configuration

### 1. Discord Bot

1. Create an application in [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a bot and get the token
3. Configure necessary permissions and scopes
4. Add the token to the `bot/.env` file

### 2. Database

1. Set up PostgreSQL
2. Create the necessary databases
3. Run migrations
4. Configure connection in `api/.env`

### 3. Discord OAuth2

1. Configure OAuth2 in Discord Developer Portal
2. Add callback URLs
3. Configure credentials in `api/.env`

## 📁 Project Structure

```
sguard-project/
├── api/
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── middlewares/    # Express middlewares
│   │   ├── routes/         # Route definitions
│   │   └── app/           # Application configuration
│   ├── package.json
│   └── tsconfig.json
├── bot/
│   ├── src/
│   │   ├── commands/       # Discord commands
│   │   ├── events/         # Event listeners
│   │   ├── utils/          # Utilities and helpers
│   │   └── bot.ts         # Bot entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Frontend utilities
│   ├── package.json
│   └── tsconfig.json
├── shared/
│   ├── types/             # Shared TypeScript types
│   ├── constants/         # Global constants
│   └── utils/             # Shared utilities
├── package.json           # Monorepo configuration
├── tsconfig.json          # Base TypeScript configuration
└── README.md
```

## 🔐 Environment Variables

### API (`api/.env`)
```env
PORT=3000
DATABASE_URL=postgresql://...
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
JWT_SECRET=...
```

### Bot (`bot/.env`)
```env
DISCORD_TOKEN=...
DISCORD_CLIENT_ID=...
API_BASE_URL=http://localhost:3000
```

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_DISCORD_CLIENT_ID=...
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Tests per project
npm run test:api
npm run test:bot
npm run test:frontend

# Tests in watch mode
npm run test:watch
```

## 📝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## 👥 Authors

- **Daniel Flores** - *Initial development* - [@danielvflores](https://github.com/danielvflores)

## 🙏 Acknowledgments

- Discord.js and DiscordX for the excellent libraries
- The TypeScript community
- All project contributors

## 📞 Support

If you have any questions or need help:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/danielvflores/SGuard/issues)
- 💬 Discord: [Support Server](https://discord.gg/your-server)

---

⭐ Don't forget to give the project a star if you found it useful!