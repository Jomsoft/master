"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agenda_config_1 = require("./agenda/agenda.config");
const bson_1 = require("bson");
exports.createJob = async (agendaJob) => {
    // let jobNames = agendaJob.names.toUpperCase();
    let jobs = await agenda_config_1.agenda.create(agendaJob.names, agendaJob.data);
    console.log(jobs.attrs);
    if (agendaJob.jobSchedule && agendaJob.jobRepeatEvery) {
        jobs.repeatAt(agendaJob.jobSchedule);
        jobs.repeatEvery(agendaJob.jobRepeatEvery);
    }
    else if (agendaJob.jobSchedule) {
        jobs.schedule(agendaJob.jobSchedule);
    }
    else if (agendaJob.jobRepeatEvery) {
        jobs.repeatEvery(agendaJob.jobRepeatEvery);
    }
    else {
        return ('Jobs not created');
    }
    jobs.save().catch((error) => {
        console.log(error);
        return 'Jobs not created';
    });
    return jobs;
};
exports.deleteJob = async (objId) => {
    let jobId = new bson_1.ObjectId(objId);
    console.log(objId);
    if (!agenda_config_1.agenda) {
        return ('Agenda instance is not ready');
    }
    try {
        return agenda_config_1.agenda.cancel({
            _id: jobId,
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.startAgenda = async () => {
    console.log('start agenda');
    await agenda_config_1.agenda.start();
};
exports.stopAgenda = async () => {
    console.log('stop agenda');
    await agenda_config_1.agenda.stop();
};
exports.listenToAgenda = async () => {
    await agenda_config_1.agenda.addListener('ready', (data) => {
        console.log(data);
    });
};
exports.jobAttributesById = async (options, attOptions) => {
    options._id = new bson_1.ObjectId(options._id);
    let jobs = await agenda_config_1.agenda.jobs(options);
    jobs.forEach(async (job) => {
        if (attOptions.computeNextRunAt)
            job.computeNextRunAt();
        if (attOptions.disable)
            job.disable();
        if (attOptions.enable)
            job.enable();
        if (attOptions.fail)
            job.fail(attOptions.fail);
        if (attOptions.isRunning)
            job.isRunning();
        if (attOptions.priority)
            job.priority(attOptions.priority);
        if (attOptions.remove)
            await job.remove();
        if (attOptions.repeatAt)
            job.repeatAt(attOptions.repeatAt);
        if (attOptions.repeatEvery)
            job.repeatEvery(attOptions.repeatEvery.interval, attOptions.repeatEvery.option);
        if (attOptions.run)
            await job.run();
        if (attOptions.schedule)
            job.schedule(attOptions.schedule);
        if (attOptions.touch)
            await job.touch();
        if (attOptions.unique)
            job.unique(attOptions.unique);
        await job.save();
    });
    return jobs;
};
//# sourceMappingURL=cronjob.js.map