### SGuard API Documentation
---

Architect Model: ["ApiRest"]<br>
Description: This API provides access to the SGuard system, allowing users to manage all configurations and personalize their security settings.

## Important Information
- **API Base URL:** `https://sguard-api.up.railway.app`
- **Authentication:** OAuth2 with Discord for secure access. All endpoints require a valid Discord OAuth2 token, and the API will verify that the user has the necessary permissions (e.g., admin/ceo) for the specified guild before allowing access or modifications.
- **Rate Limiting:** Implemented to prevent abuse and ensure fair usage.
- **Documentation:** Available at `https://docs.sguard.com/api`
- **Versioning:** The API follows semantic versioning, with the current version being `v1`.
- **Deployment:** The API is deployed on Railway, ensuring high availability and scalability.
- **Strict Model:** Separation, Stateless, Resource-Based, Uniform Interface, Cacheable, Layered System.

## Main Features
- **Custom Configuration Management:** Manage and synchronize custom settings such as bot prefix, bot name, custom commands, message formats (embed or plain), log channels, and more—ensuring changes are reflected both in the Discord server and the dashboard.
- **Flexible Moderation Levels:** Choose between preset moderation levels (light, medium, strict) or fully customize all moderation options to fit your server’s needs.
- **Anti-Raid System:** Protect your server with advanced anti-raid features to detect and prevent malicious attacks.


## Endpoints
### Prefix
- **URL:** `/api/{guildId}/prefix`
- **Methods:**
  - **GET:** Retrieves the current bot prefix for the server.
    - **Auth required:** Yes
    - **Response example:**
      ```json
      { "prefix": "!" }
      ```
  - **PUT:** Updates the bot prefix for the server.
    - **Auth required:** Yes
    - **Request body example:**
      ```json
      { "prefix": "?" }
      ```
    - **Response example:**
      ```json
      { "success": true, "prefix": "?" }
      ```

### Moderation Levels
- **URL:** `/api/{guildId}/moderation`
- **Methods:**
    - **GET:** Retrieves the current moderation level settings for the server.
        - **Auth required:** Yes
        - **Response example:**
        ```json
        { "level": "light", "customSettings": { ... } }
        ```
    - **PUT:** Updates the moderation level settings for the server.
        - **Auth required:** Yes
        - **Request body example:**
        ```json
        { "level": "strict", "customSettings": { ... } }
        ```
        - **Response example:**
        ```json
        { "success": true, "level": "strict" }
        ```

### User Information
- **URL:** `/api/me`
- **Methods:**
    - **GET:** Retrieves information about the authenticated user.
        - **Auth required:** Yes
        - **Response example:**
```json
{ "id": "123456789", "username": "User", "discriminator": "0001", "avatar": "avatar_url" }
```

### Guild Information
- **URL:** `/api/guilds`
- **Methods:**
    - **GET:** Retrieves a list of guilds the authenticated user is a member of.
        - **Auth required:** Yes
        - **Response example:**
```json
[
    { "id": "123456789", "name": "Guild 1", "icon": "icon_url" },
    { "id": "987654321", "name": "Guild 2", "icon": "icon_url" }
]
```
- **URL:** `/api/guilds/{guildId}`
- **Methods:**
    - **GET:** Retrieves detailed information about a specific guild.
        - **Auth required:** Yes
        - **Response example:**
```json
{ "id": "123456789", "name": "Guild 1", "icon": "icon_url", "memberCount": 100, "ownerId": "987654321" }
```
- **URL:** `/api/guilds/{guildId}/config`
- **Methods:**
    - **GET:** Retrieves the current configuration settings for the specified guild.
        - **Auth required:** Yes
        - **Response example:**
```json
{ "settings": { "prefix": "!", "moderationLevel": "medium", "logChannel": "logs" } }
```
- **PUT:** Updates the configuration settings for the specified guild.
    - **Auth required:** Yes
    - **Request body example:**
```json
{ "settings": { "prefix": "?", "moderationLevel": "strict", "logChannel": "new_logs" } }
```
        - **Response example:**
```json
{ "success": true, "settings": { "prefix": "?", "moderationLevel": "strict", "logChannel": "new_logs" } }
```
- **URL:** `/api/guilds/{guildId}/logs`
- **Methods:**
    - **GET:** Retrieves the log channel settings for the specified guild.
        - **Auth required:** Yes
        - **Response example:**
```json
{ "logChannel": "logs" }
```
    - **PUT:** Updates the log channel settings for the specified guild.
        - **Auth required:** Yes
        - **Request body example:**
```json
{ "logChannel": "new_logs" }
```
        - **Response example:**
```json
{ "success": true, "logChannel": "new_logs" }
```

### Health Check
- **URL:** `/api/health`
- **Methods:**
    - **GET:** Checks the health status of the API.
        - **Auth required:** No
        - **Response example:**
```json
{ "status": "ok", "uptime": 123456, "version": "v1.0.0" }
```
- **PUT:** Updates the health status of the API (for internal use).
    - **Auth required:** No
    - **Request body example:**
```json
{ "status": "maintenance" }
```
    - **Response example:**
```json
{ "success": true, "status": "maintenance" }
```

### Handling Errors

```json
{ "error": "Invalid request", "code": 400 }
```
- **Common Error Codes:**
  - `400 Bad Request`: The request was invalid or cannot be otherwise served.
  - `401 Unauthorized`: Authentication is required and has failed or has not yet been provided.
  - `403 Forbidden`: The request was valid, but the server is refusing action.
  - `404 Not Found`: The requested resource could not be found.
  - `500 Internal Server Error`: An error occurred on the server side.
- **Error Handling:** All endpoints will return appropriate error messages and status codes for invalid requests or server errors. The API will also log errors for monitoring and debugging purposes.
