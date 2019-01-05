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
import {Counters} from '../models';
import {CountersRepository} from '../repositories';

export class CountersController {
  constructor(
    @repository(CountersRepository)
    public countersRepository : CountersRepository,
  ) {}

  @post('/counters', {
    responses: {
      '200': {
        description: 'Counters model instance',
        content: {'application/json': {schema: {'x-ts-type': Counters}}},
      },
    },
  })
  async create(@requestBody() counters: Counters): Promise<Counters> {
    return await this.countersRepository.create(counters);
  }

  @get('/counters/count', {
    responses: {
      '200': {
        description: 'Counters model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Counters)) where?: Where,
  ): Promise<Count> {
    return await this.countersRepository.count(where);
  }

  @get('/counters', {
    responses: {
      '200': {
        description: 'Array of Counters model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Counters}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Counters)) filter?: Filter,
  ): Promise<Counters[]> {
    return await this.countersRepository.find(filter);
  }

  @patch('/counters', {
    responses: {
      '200': {
        description: 'Counters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() counters: Counters,
    @param.query.object('where', getWhereSchemaFor(Counters)) where?: Where,
  ): Promise<Count> {
    return await this.countersRepository.updateAll(counters, where);
  }

  @get('/counters/{id}', {
    responses: {
      '200': {
        description: 'Counters model instance',
        content: {'application/json': {schema: {'x-ts-type': Counters}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Counters> {
    return await this.countersRepository.findById(id);
  }

  @patch('/counters/{id}', {
    responses: {
      '204': {
        description: 'Counters PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() counters: Counters,
  ): Promise<void> {
    await this.countersRepository.updateById(id, counters);
  }

  @put('/counters/{id}', {
    responses: {
      '204': {
        description: 'Counters PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() counters: Counters,
  ): Promise<void> {
    await this.countersRepository.replaceById(id, counters);
  }

  @del('/counters/{id}', {
    responses: {
      '204': {
        description: 'Counters DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.countersRepository.deleteById(id);
  }
}
