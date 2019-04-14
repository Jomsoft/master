import * as admin from 'firebase-admin';

// let serviceKey = require('../src/assets/keys/jombill-597a8-firebase-adminsdk-tbeay-e31ba839cf.json');

export let firebaseInit = admin.initializeApp({
    credential: admin.credential.cert('src/assets/keys/jombill-597a8-firebase-adminsdk-tbeay-e31ba839cf.json'),
    databaseURL: "https://jombill-597a8.firebaseio.com"
});