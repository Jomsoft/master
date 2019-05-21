import {Count, CountSchema, Filter, repository, Where,} from '@loopback/repository';
import {del, get, getFilterSchemaFor, getWhereSchemaFor, param, patch, post, put, requestBody,} from '@loopback/rest';
import {Notifications} from '../models';
import {NotificationsRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

export class NotificationsController {
    constructor(
        @repository(NotificationsRepository)
        public notificationsRepository: NotificationsRepository,
    ) {
    }

    @authenticate('jwt')
    @post('/notifications', {
        responses: {
            '200': {
                description: 'Notifications model instance',
                content: {'application/json': {schema: {'x-ts-type': Notifications}}},
            },
        },
    })
    async create(@requestBody() notifications: Notifications): Promise<Notifications> {
        return await this.notificationsRepository.create(notifications);
    }

    @authenticate('jwt')
    @get('/notifications/count', {
        responses: {
            '200': {
                description: 'Notifications model count',
                content: {'application/json': {schema: CountSchema}},
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Notifications)) where?: Where,
    ): Promise<Count> {
        return await this.notificationsRepository.count(where);
    }

    @authenticate('jwt')
    @get('/notifications', {
        responses: {
            '200': {
                description: 'Array of Notifications model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': Notifications}},
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Notifications)) filter?: Filter,
    ): Promise<Notifications[]> {
        return await this.notificationsRepository.find(filter,{strictObjectIDCoercion: true});
    }

    @authenticate('jwt')
    @get('/notifications/{id}', {
        responses: {
            '200': {
                description: 'Notifications model instance',
                content: {'application/json': {schema: {'x-ts-type': Notifications}}},
            },
        },
    })
    async findById(@param.path.string('id') id: string): Promise<Notifications> {
        return await this.notificationsRepository.findById(id);
    }

    @authenticate('jwt')
    @patch('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications PATCH success',
            },
        },
    })
    async updateById(
        @param.path.string('id') id: string,
        @requestBody() notifications: Notifications,
    ): Promise<void> {
        await this.notificationsRepository.updateById(id, notifications);
    }

    @authenticate('jwt')
    @put('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications PUT success',
            },
        },
    })
    async replaceById(
        @param.path.string('id') id: string,
        @requestBody() notifications: Notifications,
    ): Promise<void> {
        await this.notificationsRepository.replaceById(id, notifications);
    }

    @authenticate('jwt')
    @del('/notifications/{id}', {
        responses: {
            '204': {
                description: 'Notifications DELETE success',
            },
        },
    })
    async deleteById(@param.path.string('id') id: string): Promise<void> {
        console.log(id);
        await this.notificationsRepository.deleteById(id);
    }
}
