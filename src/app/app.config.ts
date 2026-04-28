import { ApplicationConfig, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { selectedLanguageIndex } from './core/utils/language-pack';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      const storedIndex = localStorage.getItem('selectedLanguageIndex');
      if (storedIndex !== null) {
        const parsed = parseInt(storedIndex, 10);
        if (!isNaN(parsed)) {
          selectedLanguageIndex.set(parsed);
        }
      }
    }),
  ]
};
