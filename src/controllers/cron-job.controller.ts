
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { CronJob } from '../models';
import { CronJobRepository } from '../repositories';
import { createCron, stopCron } from '../cron/cronjob';
import { CronJob as CJob } from 'cron';

export class CronJobController {
  constructor(
    @repository(CronJobRepository)
    public cronJobRepository: CronJobRepository,
  ) { }

  @post('/cron-jobs/{function}', {
    responses: {
      '200': {
        description: 'CronJob model instance',
        content: { 'application/json': { schema: { 'x-ts-type': CronJob } } },
      },
    },
  })
  async create(@param.query.string('function') functionId: String, @requestBody() cronJob: CronJob): Promise<CronJob> {

    console.log(cronJob.cronObject);
    return await this.cronJobRepository.create(cronJob);
  }

  @get('/cron-jobs/count', {
    responses: {
      '200': {
        description: 'CronJob model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CronJob)) where?: Where,
  ): Promise<Count> {
    return await this.cronJobRepository.count(where);
  }

  @get('/cron-jobs', {
    responses: {
      '200': {
        description: 'Array of CronJob model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': CronJob } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CronJob)) filter?: Filter,
  ): Promise<CronJob[]> {
    return await this.cronJobRepository.find(filter);
  }

  @patch('/cron-jobs', {
    responses: {
      '200': {
        description: 'CronJob PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() cronJob: CronJob,
    @param.query.object('where', getWhereSchemaFor(CronJob)) where?: Where,
  ): Promise<Count> {
    return await this.cronJobRepository.updateAll(cronJob, where);
  }

  @get('/cron-jobs/{id}', {
    responses: {
      '200': {
        description: 'CronJob model instance',
        content: { 'application/json': { schema: { 'x-ts-type': CronJob } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CronJob> {
    return await this.cronJobRepository.findById(id);
  }

  @patch('/cron-jobs/{id}', {
    responses: {
      '204': {
        description: 'CronJob PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() cronJob: CronJob,
  ): Promise<void> {
    await this.cronJobRepository.updateById(id, cronJob);
  }

  @put('/cron-jobs/{id}', {
    responses: {
      '204': {
        description: 'CronJob PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cronJob: CronJob,
  ): Promise<void> {
    await this.cronJobRepository.replaceById(id, cronJob);
  }

  @del('/cron-jobs/{id}', {
    responses: {
      '204': {
        description: 'CronJob DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cronJobRepository.deleteById(id);
  }

  @get('/cron/{function}', {
    responses: {
      '200': {
        description: 'Start cronjob services',
        content: { 'application/json': { schema: { 'x-ts-type': CronJob } } },
      }
    }
  })
  async startCronJob(@param.path.string('function') functionId: string, @requestBody() cronJob: CronJob): Promise<void> {

  }

  @patch('/cron/{function}', {
    responses: {
      '204': {
        description: 'Pause cronjob services',
      },
    },
  })
  async updateCronJob() {
  }

  @get('/test-cron/{id}')
  async startCron(@param.path.string('id') id: string): Promise<void> {
    let data = await this.cronJobRepository.findById(id);
    console.log(data.cronObject);
    if (data.cronObject) {
      console.log(data.cronObject)

    }
  }

  @patch('/test-cron/{id}')
  async createCronController(@param.path.string('id') id: string, @requestBody() cronJob: CronJob): Promise<void> {
    let data = await this.cronJobRepository.findById(id);
    // stopCron(data.cronObject);
    data.status = 'stopped';
    return await this.cronJobRepository.updateById(id, data);
  }
}
