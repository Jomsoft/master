"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
exports.cron = new cron_1.CronJob('*/2 * * * * *', () => {
    const d = new Date();
    console.log('Every 3 seconds: ', d.getSeconds());
});
//# sourceMappingURL=cronjob.js.map