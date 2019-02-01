import { Request, HttpErrors } from '@loopback/rest';
import { UserRepository } from './../repositories/user.repository';
import { Provider, inject, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication';
import { repository } from '@loopback/repository';
import { promisify } from 'util';
import * as _ from 'lodash';

const jwt = require('jsonwebtoken');
const verifyAsync = promisify(jwt.verify);

export class AuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
    @repository(UserRepository) public userRepository: UserRepository,
  ) { }

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    if (name === 'jwt') {
      return new JWTStrategy()
    }
    else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }


}

export class JWTStrategy implements AuthenticationStrategy {
  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = request.query.access_token || request.headers['authorization'];
    if (!token) throw new HttpErrors.Unauthorized('No access token found!');

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    try {
      const decoded = await verifyAsync(token, 'KVqfGR5reRMV4Fphyv0isFImYxBxZJCO40tbdNf1SjZD1aVvgiaE465YP9kdWy5');
      let user = _.pick(decoded, ['id', 'email', 'username', 'role']);
      (user as UserProfile).name = user.username;
      delete user.username;
      console.log(user);
      return user;
    } catch (err) {
      Object.assign(err, {
        code: 'INVALID_ACCESS_TOKEN',
        statusCode: 401,
      });
      throw err;
    }
  }
}

export interface AuthenticationStrategy {
  authenticate(request: Request): Promise<UserProfile | undefined>;
}
