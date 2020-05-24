CREATE DATABASE thingy;
CREATE DATABASE todo_db;

CREATE TABLE todo (
    id SERIAL,
    title VARCHAR(200),
    is_done BOOLEAN);

INSERT INTO todo (title, is_done) VALUES ('first test', false);

ALTER TABLE todo ADD PRIMARY KEY (id);