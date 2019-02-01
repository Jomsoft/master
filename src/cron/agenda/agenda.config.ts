import * as Agenda from 'agenda';

export const AgendaUrl = 'mongodb://admin:jomsoftadmin123@oz20-1-shard-00-00-rcqa3.gcp.mongodb.net:27017,oz20-1-shard-00-01-rcqa3.gcp.mongodb.net:27017,oz20-1-shard-00-02-rcqa3.gcp.mongodb.net:27017/agenda?ssl=true&replicaSet=OZ20-1-shard-0&authSource=admin&retryWrites=true';
export const agenda = new Agenda({
  db: {
    address: AgendaUrl,
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

