module.exports = {
  client: 'postgresql',
  connection: {
    host: 'db', // using docker-compose
    // if no use docker-compose
    // host: '127.0.0.1',
    // port: '5432',
    database: 'tasks',
    user: 'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

}
