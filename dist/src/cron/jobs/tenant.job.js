"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agendaFunction_1 = require("../agenda/agendaFunction");
const agenda_config_1 = require("../agenda/agenda.config");
exports.tenantJob = async () => {
    let options = {
        priority: "high",
        concurrency: 10,
        lockLimit: undefined,
        lockLifetime: 10000,
    };
    await agenda_config_1.agenda.define(agendaFunction_1.AgendaFunction.TENANT_JOB, options, (job, done) => {
        // let { jobs } = job.attrs.data; // data to be pass
        console.log('starting tenant job');
        // do tenant job here
        done();
    });
};
//# sourceMappingURL=tenant.job.js.map