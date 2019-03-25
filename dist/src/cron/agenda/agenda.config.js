"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Agenda = require("agenda");
exports.AgendaUrl = 'mongodb://admin:jomsoftadmin123@oz20-1-shard-00-00-rcqa3.gcp.mongodb.net:27017,oz20-1-shard-00-01-rcqa3.gcp.mongodb.net:27017,oz20-1-shard-00-02-rcqa3.gcp.mongodb.net:27017/agenda?ssl=true&replicaSet=OZ20-1-shard-0&authSource=admin&retryWrites=true';
exports.agenda = new Agenda({
    db: {
        address: exports.AgendaUrl,
        collection: 'AgendaProperties',
        options: {
            retryWrites: true,
            ssl: true,
            replicaSet: 'OZ20-1-shard-0',
            authSource: 'admin',
            user: "admin",
            password: "jomsoftadmin123",
            useNewUrlParser: true,
        },
    },
    processEvery: '3 seconds',
});
//# sourceMappingURL=agenda.config.js.map