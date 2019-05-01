import {Credential} from './../models/credential.model';
import {UserRepository} from '../repositories/user.repository';
import {promisify} from 'util';
import {HttpErrors} from '@loopback/rest';

const isemail = require('isemail');
const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);

export async function getAccessTokenForUser(
    userRepository: UserRepository,
    credentials: Credential,
) {
    const foundUser = await userRepository.findOne({
        where: {email: credentials.email, username: credentials.username},
    });
    if (!foundUser || !foundUser.validatePassword(credentials.password)) {
        throw new HttpErrors.Unauthorized('Wrong credentials!');
    }
    foundUser.generateJWT();
    let user = foundUser.toAuthJSON();
    delete user.email;
    delete user.role;
    return user;
}

export function validateCredentials(credentials: Credential) {
    // Validate Email
    if (!isemail.validate(credentials.email)) {
        throw new HttpErrors.UnprocessableEntity('invalid email');
    }

    // Validate Password Length
    if (credentials.password.length < 8) {
        throw new HttpErrors.UnprocessableEntity(
            'password must be minimum 8 characters',
        );
    }
}
