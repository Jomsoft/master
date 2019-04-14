import {LoopbackBillingApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {basePath} from './utils/strings';
import {defineAgenda} from "./cron/agenda/agenda.define";
import {firebaseInit} from "./utils/firebase-helper";

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

export {LoopbackBillingApplication};

export async function main(options: ApplicationConfig = {}) {

    if (!options) options = {};
    if (!options.rest) options.rest = {};
    options.rest.port = appEnv.isLocal ? options.rest.port : appEnv.port;
    options.rest.host = appEnv.isLocal ? options.rest.host : appEnv.host;
    const app = new LoopbackBillingApplication(options);
    app.basePath(basePath);
    await app.boot();
    await app.start();
    await init();

    const url = app.restServer.url! + basePath;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);

    return app;
}

let init = async () => {
    await defineAgenda();
    let firebase = firebaseInit;
};



