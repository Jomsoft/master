"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
// let serviceKey = require('../src/assets/keys/jombill-597a8-firebase-adminsdk-tbeay-e31ba839cf.json');
exports.firebaseInit = admin.initializeApp({
    credential: admin.credential.cert('src/assets/keys/jombill-597a8-firebase-adminsdk-tbeay-e31ba839cf.json'),
    databaseURL: "https://jombill-597a8.firebaseio.com"
});
//# sourceMappingURL=firebase-helper.js.map