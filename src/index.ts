
import { LoopbackBillingApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { basePath } from './utils/strings';

export { LoopbackBillingApplication };

export async function main(options: ApplicationConfig = {
  
}) {
  const app = new LoopbackBillingApplication(options);
  app.basePath(basePath);
  await app.boot();
  await app.start();


  const url = app.restServer.url! + basePath;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}



