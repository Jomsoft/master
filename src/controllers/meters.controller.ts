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
import {Meters} from '../models';
import {MetersRepository} from '../repositories';

export class MetersController {
  constructor(
    @repository(MetersRepository)
    public metersRepository : MetersRepository,
  ) {}

  @post('/meters', {
    responses: {
      '200': {
        description: 'Meters model instance',
        content: {'application/json': {schema: {'x-ts-type': Meters}}},
      },
    },
  })
  async create(@requestBody() meters: Meters): Promise<Meters> {
    return await this.metersRepository.create(meters);
  }

  @get('/meters/count', {
    responses: {
      '200': {
        description: 'Meters model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Meters)) where?: Where,
  ): Promise<Count> {
    return await this.metersRepository.count(where);
  }

  @get('/meters', {
    responses: {
      '200': {
        description: 'Array of Meters model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Meters}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Meters)) filter?: Filter,
  ): Promise<Meters[]> {
    return await this.metersRepository.find(filter);
  }

  @patch('/meters', {
    responses: {
      '200': {
        description: 'Meters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() meters: Meters,
    @param.query.object('where', getWhereSchemaFor(Meters)) where?: Where,
  ): Promise<Count> {
    return await this.metersRepository.updateAll(meters, where);
  }

  @get('/meters/{id}', {
    responses: {
      '200': {
        description: 'Meters model instance',
        content: {'application/json': {schema: {'x-ts-type': Meters}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Meters> {
    return await this.metersRepository.findById(id);
  }

  @patch('/meters/{id}', {
    responses: {
      '204': {
        description: 'Meters PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() meters: Meters,
  ): Promise<void> {
    await this.metersRepository.updateById(id, meters);
  }

  @put('/meters/{id}', {
    responses: {
      '204': {
        description: 'Meters PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() meters: Meters,
  ): Promise<void> {
    await this.metersRepository.replaceById(id, meters);
  }

  @del('/meters/{id}', {
    responses: {
      '204': {
        description: 'Meters DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.metersRepository.deleteById(id);
  }
}
