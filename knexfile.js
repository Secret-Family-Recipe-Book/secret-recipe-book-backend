require("dotenv").config();

const pg = require("pg");

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false };
// }

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'yBf$1WBo?YCaVaHb$v0&',
      database: 'Recipes',
    },
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};

// const sharedConfig = {
//   client: 'pg',
//   useNullAsDefault: true,
//   migrations: { directory: './data/migrations' },
//   // pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
// }

// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: { filename: './data/auth.db3' },
//     // seeds: { directory: './data/seeds' },
//   },
//   testing: {
//     ...sharedConfig,
//     connection: { filename: './data/test.db3' },
//   },
// };