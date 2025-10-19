import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.API_PORT || 3000;

// declare routes from ./routes

// Health check route, check if the server is running
import healthRoutes from '../routes/healthRoute';
app.use('/api', healthRoutes);

// User check route, show info about the authenticated user
import userRoutes from '../routes/userRoute';
app.use('/api', userRoutes);

// Guild routes, manage guilds and their configurations
import guildRoutes from '../routes/guildRoute';
app.use('/api', guildRoutes);

// Moderation routes, manage moderation settings for guilds
import moderationRoutes from '../routes/moderationRoute';
app.use('/api', moderationRoutes);

// OAuth2 routes, handle Discord OAuth2 authentication
import oauth2Routes from '../routes/oauth2Route';
app.use('/api', oauth2Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});