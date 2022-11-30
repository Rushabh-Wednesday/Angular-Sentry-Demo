import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { AppModule } from './app/app.module';

Sentry.configureScope((scope) => {
  scope.setUser({ username: 'Rushabh' });
});

Sentry.init({
  dsn: 'https://9c4a8cc0485043f2a1315ca2f178ba7d@o4504219827503104.ingest.sentry.io/4504219829207040',
  release: 'trial_3',
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ['localhost', 'https://yourserver.io/api'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((success) => console.log(`Bootstrap success`))
  .catch((err) => console.error(err));
