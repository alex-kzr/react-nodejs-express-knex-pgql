npm init

npm i --save express

npm i --save knex pg

sudo -u postgres createuser todo_db_admin

ALTER USER todo_db_admin PASSWORD '123456';

GRANT ALL PRIVILEGES ON DATABASE todo_db TO todo_db_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO todo_db_admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO todo_db_admin;

npm i --save body-parser

npm install -g create-react-app // -g needed to create-react-app client work 
create-react-app client

npm i --save-dev concurrently