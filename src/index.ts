
import { LoopbackBillingApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { LoopbackBillingApplication };

export async function main(options: ApplicationConfig = {}) {
  const rootPath = '/api';
  const app = new LoopbackBillingApplication(options);
  await app.boot();
  await app.start();


  const url = app.restServer.url;
  console.log(`Server is running at ${url}${rootPath}`);
  console.log(`Try ${url}${rootPath}/ping`);

  return app;
}



