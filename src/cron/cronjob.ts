import { CronJobRepository } from './../repositories/cron-job.repository';
import { Filter } from '@loopback/repository';
import { TenantsRepository } from '../repositories';
import { Tenants } from '../models';
import { CronJob, CronTime } from 'cron';

export let startBillingCron = (tenantsRepository: TenantsRepository, tenants?: Tenants, filter?: Filter): Promise<Tenants[]> => {
  console.log('billing service started');
  let data = tenantsRepository.find({
    where: {
      _id: 'zS8CwDSuRtJofaJDo',
      projectNo: 'MB',
    }
  })
  let cron2 = new CronJob(' */5 * * * * * ', () => {
    console.log('cron-job has started');
    data.then((datas) => {
      console.log(datas)
    })
  }, undefined, undefined, undefined, '1');
  cron2.start();
  return data;
}

export let createCron = (date: Date): CronJob => {
  console.log('cron-job has started');
  let id = new CronJob('*/20 * * * * *', () => {
    console.log(id + '  :  ' + id.lastDate().toString());
  }, undefined, undefined, undefined, 'Jom');
  return id;
}

export let stopCron = (id?: CronJob, cronRepo?: CronJobRepository) => {
  console.log(id);
  id ? id.stop() : console.log('no object');
}


