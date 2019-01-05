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
import {Rate} from '../models';
import {RateRepository} from '../repositories';

export class RateController {
  constructor(
    @repository(RateRepository)
    public rateRepository : RateRepository,
  ) {}

  @post('/rates', {
    responses: {
      '200': {
        description: 'Rate model instance',
        content: {'application/json': {schema: {'x-ts-type': Rate}}},
      },
    },
  })
  async create(@requestBody() rate: Rate): Promise<Rate> {
    return await this.rateRepository.create(rate);
  }

  @get('/rates/count', {
    responses: {
      '200': {
        description: 'Rate model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Rate)) where?: Where,
  ): Promise<Count> {
    return await this.rateRepository.count(where);
  }

  @get('/rates', {
    responses: {
      '200': {
        description: 'Array of Rate model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Rate}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Rate)) filter?: Filter,
  ): Promise<Rate[]> {
    return await this.rateRepository.find(filter);
  }

  @patch('/rates', {
    responses: {
      '200': {
        description: 'Rate PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() rate: Rate,
    @param.query.object('where', getWhereSchemaFor(Rate)) where?: Where,
  ): Promise<Count> {
    return await this.rateRepository.updateAll(rate, where);
  }

  @get('/rates/{id}', {
    responses: {
      '200': {
        description: 'Rate model instance',
        content: {'application/json': {schema: {'x-ts-type': Rate}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Rate> {
    return await this.rateRepository.findById(id);
  }

  @patch('/rates/{id}', {
    responses: {
      '204': {
        description: 'Rate PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() rate: Rate,
  ): Promise<void> {
    await this.rateRepository.updateById(id, rate);
  }

  @put('/rates/{id}', {
    responses: {
      '204': {
        description: 'Rate PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rate: Rate,
  ): Promise<void> {
    await this.rateRepository.replaceById(id, rate);
  }

  @del('/rates/{id}', {
    responses: {
      '204': {
        description: 'Rate DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rateRepository.deleteById(id);
  }
}
