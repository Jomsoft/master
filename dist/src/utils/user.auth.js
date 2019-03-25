"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const rest_1 = require("@loopback/rest");
const isemail = require('isemail');
const jwt = require('jsonwebtoken');
const signAsync = util_1.promisify(jwt.sign);
async function getAccessTokenForUser(userRepository, credentials) {
    const foundUser = await userRepository.findOne({
        where: { email: credentials.email, username: credentials.username },
    });
    if (!foundUser || !foundUser.validatePassword(credentials.password)) {
        throw new rest_1.HttpErrors.Unauthorized('Wrong credentials!');
    }
    foundUser.generateJWT();
    let user = foundUser.toAuthJSON();
    delete user.email;
    delete user.role;
    return user;
}
exports.getAccessTokenForUser = getAccessTokenForUser;
function validateCredentials(credentials) {
    // Validate Email
    if (!isemail.validate(credentials.email)) {
        throw new rest_1.HttpErrors.UnprocessableEntity('invalid email');
    }
    // Validate Password Length
    if (credentials.password.length < 8) {
        throw new rest_1.HttpErrors.UnprocessableEntity('password must be minimum 8 characters');
    }
}
exports.validateCredentials = validateCredentials;
//# sourceMappingURL=user.auth.js.map