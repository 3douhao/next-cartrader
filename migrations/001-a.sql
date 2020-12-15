--up
-- user
CREATE TABLE user (
    id integer PRIMARY KEY AUTOINCREMENT,
    email text,
    password text
);
/* INSERT INTO user (email, password) VALUES ('a@a.com', 'supersecret'); */ 

--down
DROP TABLE user;

