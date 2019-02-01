
import { jobAttributesById, stopAgenda } from './../cron/cronjob';
import { AgendaAttributes } from '../models/agenda.attributes';
import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaFunction } from '../cron/agenda/agendaFunction';
import { AgendaJob } from '../models/agenda.job.model';
import { get, requestBody, post, param, del, getFilterSchemaFor, patch, getWhereSchemaFor, put } from "@loopback/rest";
import { createJob, startAgenda, deleteJob } from '../cron/cronjob';
import { repository, Filter, CountSchema, Where, Count } from '@loopback/repository';
import { AgendaJobsRepository } from '../repositories/agenda-jobs.repository';

export class AgendaController {

  constructor(@repository(AgendaJobsRepository) private agendaRepository: AgendaJobsRepository) { }

  @get('/agenda/run', {
    responses: {
      '200': {
        description: 'Run agenda processer',
      }
    }
  })
  async runAgenda() {
    return await startAgenda();
  }

  @get('/agenda/stop', {
    responses: {
      '200': {
        description: 'Stop agenda processer',
      }
    }
  })
  async stopAgenda() {
    return await stopAgenda();
  }

  @get('/agenda/function', {
    responses: {
      description: 'Get all function',
    }
  })
  async getAgendaFunction() {
    return Object.values(AgendaFunction);
  }

  @post('/agenda/function', {
    responses: {
      '200': {
        description: 'Get all function',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': AgendaAttributes } },
          }
        }
      }
    }
  })
  async runAgendaAttributes(@requestBody() agendaAttributes: AgendaAttributes) {
    return jobAttributesById(agendaAttributes.agendaProperties, agendaAttributes.jobAttributes);
  }

  @get('/agenda/count', {
    responses: {
      '200': {
        description: 'Category model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(AgendaProperties)) where?: Where,
  ): Promise<Count> {
    return await this.agendaRepository.count(where);
  }

  @get('/agenda', {
    responses: {
      '200': {
        description: 'Run agenda jobs',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': AgendaProperties } },
          },
        },
      },
    }
  })
  async find(@param.query.object('filter', getFilterSchemaFor(AgendaProperties)) filters?: Filter): Promise<AgendaProperties[]> {
    let data = await this.agendaRepository.find(filters);
    return data;
  }

  @post('/agenda', {
    responses: {
      '200': {
        description: 'Post agenda jobs',
        content: { 'application/json': { 'x-ts-type': AgendaJob } },
      },
    }
  })
  async createJobs(@requestBody() agenda: AgendaJob) {
    return await createJob(agenda);
  }

  @patch('/agenda', {
    responses: {
      '200': {
        description: 'Category PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() agenda: AgendaProperties,
    @param.query.object('where', getWhereSchemaFor(AgendaProperties)) where?: Where,
  ): Promise<Count> {
    return await this.agendaRepository.updateAll(agenda, where);
  }

  @get('/agenda/{id}', {
    responses: {
      '200': {
        description: 'Run agenda jobs',
        content: {
          'application/json': {
            schema: { items: { 'x-ts-type': AgendaProperties } },
          },
        },
      },
    }
  })
  async getAgendaById(@param.path.string('id') id: string, @param.query.object('filter', getFilterSchemaFor(AgendaProperties)) filters?: Filter) {
    return await this.agendaRepository.findById(id);
  }

  @put('/agenda/{id}', {
    responses: {
      '204': {
        description: 'Agenda PUT success',
      },
    },
  })
  async replaceById(
    @requestBody() agenda: AgendaProperties,
    @param.path.string('id') id: string,
  ): Promise<void> {
    return await this.agendaRepository.replaceById(id, agenda);
  }

  @patch('/agenda/{id}', {
    responses: {
      '204': {
        description: 'Agenda PATCH success',
      },
    },
  })
  async updateById(
    @requestBody() agenda: AgendaProperties,
    @param.path.string('id') id: string,
  ): Promise<object> {
    console.log(agenda);
    await this.agendaRepository.updateById(id, agenda);
    return { 'response': 'success' };
  }

  @del('/agenda/{id}', {
    responses: {
      '204': {
        description: 'Agenda DELETE success',
      },
    },
  })
  async deleteAgenda(@param.path.string('id') id: string) {
    let data = await this.agendaRepository.findById(id);
    return deleteJob(data._id);
  }


}
