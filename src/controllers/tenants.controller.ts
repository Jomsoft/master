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
import { Tenants } from '../models';
import { TenantsRepository } from '../repositories';

export class TenantsController {
  constructor(
    @repository(TenantsRepository)
    public tenantsRepository: TenantsRepository,
  ) { }

  @post('/tenants', {
    responses: {
      '200': {
        description: 'Tenants model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Tenants } } },
      },
    },
  })
  async create(@requestBody() tenants: Tenants): Promise<Tenants> {
    return await this.tenantsRepository.create(tenants);
  }

  @get('/tenants/count', {
    responses: {
      '200': {
        description: 'Tenants model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tenants)) where?: Where,
  ): Promise<Count> {
    console.log('get count');
    return await this.tenantsRepository.count(where);
  }

  @get('/tenants', {
    responses: {
      '200': {
        description: 'Array of Tenants model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Tenants } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tenants)) filter?: Filter,
  ): Promise<Tenants[]> {
    return await this.tenantsRepository.find(filter);
  }

  @patch('/tenants', {
    responses: {
      '200': {
        description: 'Tenants PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() tenants: Tenants,
    @param.query.object('where', getWhereSchemaFor(Tenants)) where?: Where,
  ): Promise<Count> {
    return await this.tenantsRepository.updateAll(tenants, where);
  }

  @get('/tenants/{id}', {
    responses: {
      '200': {
        description: 'Tenants model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Tenants } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Tenants> {
    return await this.tenantsRepository.findById(id);
  }

  @patch('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() tenants: Tenants,
  ): Promise<void> {
    await this.tenantsRepository.updateById(id, tenants);
  }

  @put('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tenants: Tenants,
  ): Promise<void> {
    await this.tenantsRepository.replaceById(id, tenants);
  }

  @del('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tenantsRepository.deleteById(id);
  }

  @get('/tenants/test', {
    responses: {
      '204': {
        description: 'Tenants DELETE success',
      },
    },
  })
  async testEndpoint(): Promise<void> {
    console.log(this.tenantsRepository.modelClass.modelName);
  }
}
