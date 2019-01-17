import { JobAttributes } from '../models/agenda.attributes';
import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaJob } from '../models/agenda.job.model';
import { agenda } from './agenda/agenda.config';
import { ObjectId } from 'bson';

export let createJob = async (agendaJob: AgendaJob) => {
  let jobNames = agendaJob.names.toUpperCase();
  let jobs = await agenda.create(jobNames, agendaJob.data);
  console.log(jobs.attrs);
  if (agendaJob.jobSchedule && agendaJob.jobRepeatEvery) {
    jobs.repeatAt(agendaJob.jobSchedule);
    jobs.repeatEvery(agendaJob.jobRepeatEvery);
  } else if (agendaJob.jobSchedule) {
    jobs.schedule(agendaJob.jobSchedule);
  } else if (agendaJob.jobRepeatEvery) {
    jobs.repeatEvery(agendaJob.jobRepeatEvery);
  } else {
    return ('Jobs not created');
  }

  jobs.save().catch((error) => {
    console.log(error);
    return 'Jobs not created';
  })

  return jobs;
}

export let deleteJob = async (objId?: string | ObjectId) => {
  let jobId = new ObjectId(objId);
  console.log(objId);
  if (!agenda) {
    return ('Agenda instance is not ready');
  }
  try {
    return agenda.cancel({
      _id: jobId,
    });
  } catch (e) {
    console.log(e);
  }
}

export let startAgenda = async () => {
  console.log('start agenda');
  await agenda.start();
}

export let stopAgenda = async () => {
  console.log('stop agenda');
  await agenda.stop();
}

export let listenToAgenda = async () => {
  await agenda.addListener('ready', (data) => {
    console.log(data);
  })
}

export let jobAttributesById = async (options: AgendaProperties, attOptions: JobAttributes) => {
  options._id = new ObjectId(options._id);
  let jobs = await agenda.jobs(options);
  jobs.forEach((job) => {

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
      job.remove();
    if (attOptions.repeatAt)
      job.repeatAt(attOptions.repeatAt);
    if (attOptions.repeatEvery)
      job.repeatEvery(attOptions.repeatEvery.interval, attOptions.repeatEvery.option);
    if (attOptions.run)
      job.run();
    if (attOptions.schedule)
      job.schedule(attOptions.schedule);
    if (attOptions.touch)
      job.touch();
    if (attOptions.unique)
      job.unique(attOptions.unique);

    job.save();

  });

  return jobs;
}




