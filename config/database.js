const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'DATABASE_NAME'),
      user: env('DATABASE_USERNAME', 'DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD', 'DATABASE_PASSWORD'),
      // ssl: env.bool('DATABASE_SSL', true),
    },
  },
});