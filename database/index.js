const knex = require('knex')({
    client: 'pg',
    version: '12.2',
    connection: {
        host: '127.0.0.1',
        port: '5433',
        database: 'todo_db',
        user: 'todo_db_admin',
        password: '123456'
    }    
});

module.exports = knex;