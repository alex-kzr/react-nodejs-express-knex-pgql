const knex = require('knex')({
    client: 'pg',
    host: 'localhost',
    database: 'todo_db',
    user: 'todo_db_admin',
    password: '123456'
});

module.exports = knex;