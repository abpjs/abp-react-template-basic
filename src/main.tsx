import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AbpProvider, type Config, eLayoutType, getRoutesService } from '@abpjs/core';
import { ThemeBasicProvider, LAYOUTS } from '@abpjs/theme-basic';
import { AccountProvider } from '@abpjs/account';
import App from './App';

// Register app routes via RoutesService
const routesService = getRoutesService();
routesService.add([
  { name: 'Home', path: '', order: 1, layout: eLayoutType.application },
]);

// Define requirements with layout components from theme.basic
const requirements: Config.Requirements = {
  layouts: LAYOUTS,
};

async function loadConfig(): Promise<Config.Environment> {
  const response = await fetch('/appconfig.json');
  return response.json();
}

async function bootstrap() {
  const environment = await loadConfig();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <AbpProvider environment={environment} requirements={requirements}>
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
