import { AgendaJobOption } from "../../models";
import { AgendaFunction } from "../agenda/agendaFunction";
import { agenda } from "../agenda/agenda.config";


export let tenantJob = async () => {

  let options: AgendaJobOption = {
    priority: "high", // job priorities
    concurrency: 10, // number of jobs that can be running at any given moment
    lockLimit: undefined, // max number jobs that can be locked at any given moment
    lockLifetime: 10000, // time limit for job before timeout in milliseconds
  }

  await agenda.define(AgendaFunction.TENANT_JOB, options, (job, done) => {
    // let { jobs } = job.attrs.data; // data to be pass
    console.log('starting tenant job');
    // do tenant job here
    done();
  });
}
