"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.LoopbackBillingApplication = application_1.LoopbackBillingApplication;
const strings_1 = require("./utils/strings");
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
async function main(options = {}) {
    if (!options)
        options = {};
    if (!options.rest)
        options.rest = {};
    options.rest.port = appEnv.isLocal ? options.rest.port : appEnv.port;
    options.rest.host = appEnv.isLocal ? options.rest.host : appEnv.host;
    const app = new application_1.LoopbackBillingApplication(options);
    app.basePath(strings_1.basePath);
    await app.boot();
    await app.start();
    const url = app.restServer.url + strings_1.basePath;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map