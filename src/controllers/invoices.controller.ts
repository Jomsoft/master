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
import {Invoices} from '../models';
import {InvoicesRepository} from '../repositories';

export class InvoicesController {
  constructor(
    @repository(InvoicesRepository)
    public invoicesRepository : InvoicesRepository,
  ) {}

  @post('/invoices', {
    responses: {
      '200': {
        description: 'Invoices model instance',
        content: {'application/json': {schema: {'x-ts-type': Invoices}}},
      },
    },
  })
  async create(@requestBody() invoices: Invoices): Promise<Invoices> {
    return await this.invoicesRepository.create(invoices);
  }

  @get('/invoices/count', {
    responses: {
      '200': {
        description: 'Invoices model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Invoices)) where?: Where,
  ): Promise<Count> {
    return await this.invoicesRepository.count(where);
  }

  @get('/invoices', {
    responses: {
      '200': {
        description: 'Array of Invoices model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Invoices}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Invoices)) filter?: Filter,
  ): Promise<Invoices[]> {
    return await this.invoicesRepository.find(filter);
  }

  @get('/invoices/distinct', {
    responses: {
      '200': {
        description: 'Array of unique Invoices model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Invoices}},
          },
        },
      },
    },
  })
  async findDistinct(
      @param.query.object('filter', getFilterSchemaFor(Invoices)) filter?: Filter,
  ): Promise<Invoices[]> {
    let invoices = await this.invoicesRepository.find(filter);
    let uniqueInvoices = Array.from(new Set(invoices));
    return uniqueInvoices;
  }

  @patch('/invoices', {
    responses: {
      '200': {
        description: 'Invoices PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() invoices: Invoices,
    @param.query.object('where', getWhereSchemaFor(Invoices)) where?: Where,
  ): Promise<Count> {
    return await this.invoicesRepository.updateAll(invoices, where);
  }

  @get('/invoices/{id}', {
    responses: {
      '200': {
        description: 'Invoices model instance',
        content: {'application/json': {schema: {'x-ts-type': Invoices}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Invoices> {
    return await this.invoicesRepository.findById(id);
  }

  @patch('/invoices/{id}', {
    responses: {
      '204': {
        description: 'Invoices PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() invoices: Invoices,
  ): Promise<void> {
    await this.invoicesRepository.updateById(id, invoices);
  }

  @put('/invoices/{id}', {
    responses: {
      '204': {
        description: 'Invoices PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() invoices: Invoices,
  ): Promise<void> {
    await this.invoicesRepository.replaceById(id, invoices);
  }

  @del('/invoices/{id}', {
    responses: {
      '204': {
        description: 'Invoices DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.invoicesRepository.deleteById(id);
  }
}
