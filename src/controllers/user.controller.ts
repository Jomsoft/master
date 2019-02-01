import { inject } from '@loopback/core';
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
  HttpErrors,
} from '@loopback/rest';
import { Users, Credential } from '../models';
import { UserRepository } from '../repositories';
import { validateCredentials, getAccessTokenForUser } from '../utils/user.auth';
import { authenticate, AuthenticationBindings, UserProfile } from '@loopback/authentication';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(AuthenticationBindings.CURRENT_USER, { optional: true }) private user: UserProfile,
  ) { }

  @authenticate('jwt')
  @get('/users/me')
  getUser() {
    return this.user;
  }

  @post('/login', {
    responses: {
      '200': {
        description: 'Login endpoint',
        content: { 'application/json': { schema: { type: 'object', items: { 'x-ts-type': { '_id': 'string', 'email': 'string', 'token': 'string' } } } } },
      },
    },
  })
  async login(@requestBody() user: Credential) {
    let approved = await getAccessTokenForUser(this.userRepository, user);
    return approved;
  }

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async create(@requestBody() user: Credential): Promise<Users | undefined> {
    validateCredentials(user);
    if (user.password && user.role) {
      const finalUser = new Users({ username: user.username, email: user.email, role: user.role });
      finalUser.setPassword(user.password);
      let savedUser = await this.userRepository.create(finalUser);
      delete savedUser.hash;
      delete savedUser.salt;
      return savedUser;
    }
    else if (!user.password || !user.role)
      throw new HttpErrors.UnprocessableEntity('missing password or role');
  }

  @authenticate('jwt')
  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.count(where);
  }

  @authenticate('jwt')
  @get('/users', {
    responses: {
      '200': {
        description: 'Array of User model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Users } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Users)) filter?: Filter,
  ): Promise<Users[]> {
    return await this.userRepository.find(filter);
  }

  @authenticate('jwt')
  @patch('/users', {
    responses: {
      '200': {
        description: 'User PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() user: Users,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.updateAll(user, where);
  }

  @authenticate('jwt')
  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Users> {
    return await this.userRepository.findById(id);
  }

  @authenticate('jwt')
  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() user: Users,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @authenticate('jwt')
  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'User PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: Users,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  // @authenticate('jwt')
  // @del('/users/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'User DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.string('id') id: string): Promise<void> {
  //   await this.userRepository.deleteById(id);
  // }
}
