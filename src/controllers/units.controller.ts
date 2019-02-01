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
import {Units} from '../models';
import {UnitsRepository} from '../repositories';

export class UnitsController {
  constructor(
    @repository(UnitsRepository)
    public unitsRepository : UnitsRepository,
  ) {}

  @post('/units', {
    responses: {
      '200': {
        description: 'Units model instance',
        content: {'application/json': {schema: {'x-ts-type': Units}}},
      },
    },
  })
  async create(@requestBody() units: Units): Promise<Units> {
    return await this.unitsRepository.create(units);
  }

  @get('/units/count', {
    responses: {
      '200': {
        description: 'Units model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Units)) where?: Where,
  ): Promise<Count> {
    return await this.unitsRepository.count(where);
  }

  @get('/units', {
    responses: {
      '200': {
        description: 'Array of Units model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Units}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Units)) filter?: Filter,
  ): Promise<Units[]> {
    return await this.unitsRepository.find(filter);
  }

  @patch('/units', {
    responses: {
      '200': {
        description: 'Units PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() units: Units,
    @param.query.object('where', getWhereSchemaFor(Units)) where?: Where,
  ): Promise<Count> {
    return await this.unitsRepository.updateAll(units, where);
  }

  @get('/units/{id}', {
    responses: {
      '200': {
        description: 'Units model instance',
        content: {'application/json': {schema: {'x-ts-type': Units}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Units> {
    return await this.unitsRepository.findById(id);
  }

  @patch('/units/{id}', {
    responses: {
      '204': {
        description: 'Units PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() units: Units,
  ): Promise<void> {
    await this.unitsRepository.updateById(id, units);
  }

  @put('/units/{id}', {
    responses: {
      '204': {
        description: 'Units PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() units: Units,
  ): Promise<void> {
    await this.unitsRepository.replaceById(id, units);
  }

  @del('/units/{id}', {
    responses: {
      '204': {
        description: 'Units DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.unitsRepository.deleteById(id);
  }
}
