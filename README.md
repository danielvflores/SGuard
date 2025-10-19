# SGuard Project

SGuard es una plataforma completa de seguridad y moderación para Discord que incluye un bot inteligente, una API robusta y una interfaz web moderna.

## 🏗️ Arquitectura del Monorepo

Este proyecto está organizado como un monorepo que contiene tres componentes principales:

```
sguard-project/
├── api/          # Servidor backend (Express.js + TypeScript)
├── bot/          # Bot de Discord (DiscordX + TypeScript)
├── frontend/     # Interfaz web (React/Next.js + TypeScript)
└── shared/       # Código compartido entre proyectos
```

## 🚀 Características

### 🤖 Bot de Discord
- **Moderación automática** con análisis de contenido inteligente
- **Comandos de moderación** para administradores
- **Sistema de sanciones** configurable
- **Detección de keywords** en múltiples idiomas
- **Análisis de sentimientos** y toxicidad

### 🌐 API Backend
- **RESTful API** para gestión de configuraciones
- **Autenticación OAuth2** con Discord
- **Gestión de guilds** y usuarios
- **Configuración de moderación** por servidor
- **Logging y auditoría** de acciones

### 💻 Frontend Web
- **Dashboard de administración** intuitivo
- **Configuración visual** de parámetros de moderación
- **Estadísticas y métricas** en tiempo real
- **Gestión de usuarios** y permisos
- **Interfaz responsive** y moderna

## 🛠️ Tecnologías

- **TypeScript** - Lenguaje principal
- **Node.js** - Runtime de JavaScript
- **Discord.js** - Librería para interactuar con Discord
- **DiscordX** - Framework para bots de Discord
- **Express.js** - Framework web para la API
- **React/Next.js** - Framework para el frontend
- **PostgreSQL** - Base de datos principal
- **Docker** - Contenedorización

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/danielvflores/sguard-project.git
   cd sguard-project
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   ```bash
   # Copiar archivos de ejemplo
   cp api/.env.example api/.env
   cp bot/.env.example bot/.env
   cp frontend/.env.example frontend/.env.local
   ```

4. **Configurar las variables según tu entorno**

## 🏃‍♂️ Scripts Disponibles

### Comandos Globales

```bash
# Instalar todas las dependencias
npm run install:all

# Construir todos los proyectos
npm run build

# Modo desarrollo (todos los servicios)
npm run dev

# Producción (todos los servicios)
npm run start

# Limpiar archivos generados
npm run clean

# Ejecutar tests
npm run test

# Linting
npm run lint
```

### Comandos Por Proyecto

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

## 🔧 Configuración de Desarrollo

### 1. Bot de Discord

1. Crear una aplicación en [Discord Developer Portal](https://discord.com/developers/applications)
2. Crear un bot y obtener el token
3. Configurar permisos y scopes necesarios
4. Añadir el token al archivo `bot/.env`

### 2. Base de Datos

1. Configurar PostgreSQL
2. Crear las bases de datos necesarias
3. Ejecutar migraciones
4. Configurar conexión en `api/.env`

### 3. OAuth2 de Discord

1. Configurar OAuth2 en Discord Developer Portal
2. Añadir URLs de callback
3. Configurar credenciales en `api/.env`

## 📁 Estructura del Proyecto

```
sguard-project/
├── api/
│   ├── src/
│   │   ├── controllers/    # Controladores de la API
│   │   ├── middlewares/    # Middlewares de Express
│   │   ├── routes/         # Definición de rutas
│   │   └── app/           # Configuración de la aplicación
│   ├── package.json
│   └── tsconfig.json
├── bot/
│   ├── src/
│   │   ├── commands/       # Comandos de Discord
│   │   ├── events/         # Event listeners
│   │   ├── utils/          # Utilidades y helpers
│   │   └── bot.ts         # Punto de entrada del bot
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas de la aplicación
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utilidades frontend
│   ├── package.json
│   └── tsconfig.json
├── shared/
│   ├── types/             # Tipos TypeScript compartidos
│   ├── constants/         # Constantes globales
│   └── utils/             # Utilidades compartidas
├── package.json           # Configuración del monorepo
├── tsconfig.json          # Configuración base de TypeScript
└── README.md
```

## 🔐 Variables de Entorno

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
# Ejecutar todos los tests
npm test

# Tests por proyecto
npm run test:api
npm run test:bot
npm run test:frontend

# Tests en modo watch
npm run test:watch
```

## 📝 Contribución

1. Fork el proyecto
2. Crear una rama de feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit los cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **Daniel Flores** - *Desarrollo inicial* - [@danielvflores](https://github.com/danielvflores)

## 🙏 Agradecimientos

- Discord.js y DiscordX por las excelentes librerías
- La comunidad de TypeScript
- Todos los contribuidores al proyecto

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- 📧 Email: tu-email@ejemplo.com
- 🐛 Issues: [GitHub Issues](https://github.com/danielvflores/sguard-project/issues)
- 💬 Discord: [Servidor de soporte](https://discord.gg/tu-servidor)

---

⭐ ¡No olvides dar una estrella al proyecto si te resultó útil!