"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const billing_job_1 = require("./../jobs/billing.job");
const agenda_config_1 = require("./agenda.config");
const amr_job_1 = require("../jobs/amr.job");
const tenant_job_1 = require("../jobs/tenant.job");
exports.defineAgenda = async () => {
    await billing_job_1.billingJob();
    await amr_job_1.amrJob();
    await tenant_job_1.tenantJob();
    agenda_config_1.agenda.start();
};
//# sourceMappingURL=agenda.define.js.map