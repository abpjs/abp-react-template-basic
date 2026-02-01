import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AbpProvider, type ABP, type Config, eLayoutType } from '@abpjs/core';
import { ThemeBasicProvider, LAYOUTS } from '@abpjs/theme-basic';
import { AccountProvider } from '@abpjs/account';
import App from './App';

interface AppConfig {
  oAuthConfig: {
    issuer: string;
    redirectUri: string;
    clientId: string;
    responseType: string;
    scope: string;
    requireHttps: boolean;
  };
  application: {
    baseUrl: string;
    name: string;
  };
  apis: Config.Apis;
}

// Define app routes for the navigation system
const routes: ABP.FullRoute[] = [
  { name: 'Home', path: '', order: 1, layout: eLayoutType.application },
];

// Define requirements with layout components from theme.basic
const requirements: Config.Requirements = {
  layouts: LAYOUTS,
};

async function loadConfig(): Promise<AppConfig> {
  const response = await fetch('/appconfig.json');
  return response.json();
}

async function bootstrap() {
  const config = await loadConfig();

  const environment = {
    production: false,
    application: config.application,
    apis: config.apis,
    oAuthConfig: {
      authority: config.oAuthConfig.issuer,
      client_id: config.oAuthConfig.clientId,
      redirect_uri: config.oAuthConfig.redirectUri,
      post_logout_redirect_uri: config.oAuthConfig.redirectUri,
      response_type: config.oAuthConfig.responseType,
      scope: config.oAuthConfig.scope,
      automaticSilentRenew: true,
      includeIdTokenInSilentRenew: true,
    },
  };

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <AbpProvider environment={environment} routes={routes} requirements={requirements}>
          <ThemeBasicProvider>
            <AccountProvider options={{ redirectUrl: '/' }}>
              <App />
            </AccountProvider>
          </ThemeBasicProvider>
        </AbpProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

bootstrap();
