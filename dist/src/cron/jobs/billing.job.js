"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agenda_config_1 = require("../agenda/agenda.config");
const agendaFunction_1 = require("../agenda/agendaFunction");
exports.billingJob = async () => {
    let options = {
        priority: "high",
        concurrency: 10,
        lockLimit: undefined,
        lockLifetime: 10000,
    };
    await agenda_config_1.agenda.define(agendaFunction_1.AgendaFunction.BILLING_JOB, options, (job, done) => {
        // const { jobs } = job.attrs.data; // data to be pass
        console.log('starting billing job');
        // do billing job here
        done();
    });
};
//# sourceMappingURL=billing.job.js.map