
# 🚦 SGuard API

---

<p align="center">
  <b>Global Project Name:</b> <code>SGuard</code> <br>
  <b>This Project Name:</b> <code>SGuard API</code> <br>
  <b>Global Description:</b> <i>SGuard is a simple Discord bot built with TypeScript. This prototype aims to compete with the former D-Safe bot, which was discontinued. The goal is to create an enhanced and free alternative to D-Safe for everyone.</i> <br>
  <b>Specific Description:</b> <i>SGuard API is the backend service for the SGuard Discord bot, providing a RESTful API for managing bot configurations, user settings, and server moderation tools.</i>
</p>

<p align="center">
  <b>Stack:</b> <code>TypeScript</code> · <code>MongoDB</code> · <code>Astro</code> · <code>Tailwind</code> · <code>Express</code> <br>
  <b>Hosts:</b> <code>Vercel</code> · <code>Railway</code> <br>
  <b>Paths:</b> <code>sguard-bot</code> · <code>sguard-api</code> · <code>sguard-frontend</code>
</p>

---

## 🌍 Global Features

- 🤖 Discord Bot
- 🔗 API
- 🖥️ Frontend
- 🗄️ Database Integration
- ☁️ Cloud Deployment

## 🎯 Specific Features

- 🛡️ Advanced moderation tools for Discord
- 📊 Real-time analytics and logs
- 🖼️ Interactive web dashboard (Astro + Tailwind)
- 🔒 Secure API communication between bot and backend
- ⚙️ User and server configuration management
- 🚀 Automated deployment on Vercel and Railway
- 🗃️ MongoDB Atlas setup and data management

---

> **SGuard API** provides secure and flexible access to the SGuard system, empowering users to manage all configurations and personalize the security of their Discord servers.

---

## 🏗️ Architecture
**Model:** `ApiRest`

---

## 📌 Key Information

- **🌐 API Base URL:** `https://sguard-api.up.railway.app`
- **🔒 Authentication:** OAuth2 with Discord. All endpoints require a valid OAuth2 token and proper permissions (admin/ceo) for the specified guild.
- **🚦 Rate Limiting:** Implemented to prevent abuse and ensure fair usage.
- **📄 Documentation:** [API Docs](https://docs.sguard.com/api)
- **🗂️ Versioning:** Semantic versioning, current version is `v1`.
- **☁️ Deployment:** Hosted on Railway for high availability and scalability.
- **🧩 Strict Model:** Separation, Stateless, Resource-Based, Uniform Interface, Cacheable, Layered System.

---

## ✨ Main Features

- **🛠️ Custom Configuration Management:** Synchronize settings such as bot prefix, bot name, custom commands, message formats (embed or plain), log channels, and more—ensuring changes are reflected both in the Discord server and the dashboard.
- **🛡️ Flexible Moderation Levels:** Choose between preset moderation levels (light, medium, strict) or fully customize all moderation options to fit your server’s needs.
- **🚨 Anti-Raid System:** Advanced protection against attacks and raids.

---

## 🚀 Main Endpoints

### 🔑 Prefix
- **URL:** `/api/{guildId}/prefix`
  - **GET:** Retrieve the current bot prefix for the server.
  - **PUT:** Update the bot prefix for the server.

### 🛡️ Moderation Levels
- **URL:** `/api/{guildId}/moderation`
  - **GET:** Retrieve the current moderation level for the server.
  - **PUT:** Update the moderation level for the server.

### 👤 User Information
- **URL:** `/api/me`
  - **GET:** Get information about the authenticated user.

### 🏠 Guild Information
- **URL:** `/api/guilds`
  - **GET:** List of guilds the user has access to.
- **URL:** `/api/guilds/{guildId}`
  - **GET:** Details of a specific guild.
- **URL:** `/api/guilds/{guildId}/config`
  - **GET/PUT:** Get/update guild configuration.
- **URL:** `/api/guilds/{guildId}/logs`
  - **GET/PUT:** Get/update log channel.

### ❤️‍🩹 Health Check
- **URL:** `/api/health`
  - **GET:** API health status.

---

## ⚠️ Error Handling
> Error responses follow this format:
```json
{ "error": "Invalid request", "code": 400 }
```
**Common codes:** `400`, `401`, `403`, `404`, `500`  
All endpoints return appropriate messages and codes, and errors are logged for monitoring and debugging.