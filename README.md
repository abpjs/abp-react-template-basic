# ABP React Basic Template

A simple starter template for building React applications with the ABP Framework.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure your backend connection (see [Configuration](#configuration))

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Configuration

Before running the application, you must update the configuration file to connect to your ABP backend.

Edit `public/appconfig.json` with your environment settings:

```json
{
  "oAuthConfig": {
    "issuer": "https://your-backend-url/",
    "redirectUri": "http://localhost:4202",
    "clientId": "your_client_id",
    "responseType": "code",
    "scope": "offline_access your_api_scope",
    "requireHttps": true
  },
  "application": {
    "baseUrl": "http://localhost:4202",
    "name": "YourAppName"
  },
  "apis": {
    "default": {
      "url": "https://your-backend-url",
      "rootNamespace": "YourNamespace"
    }
  }
}
```

### Configuration Options

| Property | Description |
|----------|-------------|
| `oAuthConfig.issuer` | Your ABP backend OAuth authority URL |
| `oAuthConfig.redirectUri` | The URL where users are redirected after login |
| `oAuthConfig.clientId` | Your OAuth client ID configured in ABP |
| `oAuthConfig.scope` | OAuth scopes (include your API scope) |
| `apis.default.url` | Your ABP backend API URL |
| `apis.default.rootNamespace` | Your ABP application's root namespace |

## Documentation

For more information, visit our documentation at [docs.abpjs.io/docs](https://docs.abpjs.io/docs)
