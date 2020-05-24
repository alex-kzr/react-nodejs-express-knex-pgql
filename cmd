npm init

npm i --save express

npm i --save knex pg

sudo -u postgres createuser todo_db_admin

ALTER USER todo_db_admin PASSWORD '123456';

GRANT ALL PRIVILEGES ON DATABASE todo_db TO todo_db_admin;