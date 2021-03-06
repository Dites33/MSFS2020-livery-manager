const Sentry = require('@sentry/electron');
const { RewriteFrames } = require('@sentry/integrations');

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://ac6e425a093744a0a72e061986c2f138@o252778.ingest.sentry.io/5431856',
    environment: process.env.NODE_ENV,
    enableNative: true,
    debug: true,
    attachStacktrace: true,
    integrations: [new RewriteFrames()],
    ignoreErrors: ['BrowserWindow Unresponsive'],
  });
}
