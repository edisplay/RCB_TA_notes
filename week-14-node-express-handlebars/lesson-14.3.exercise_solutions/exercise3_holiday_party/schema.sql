### Schema
/*

CREATE DATABASE holiday_party_db;
USE holiday_party_db;

CREATE TABLE clients
(
id int NOT NULL AUTO_INCREMENT,
client_name varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE parties
(
id int NOT NULL AUTO_INCREMENT,
party_name varchar(255) NOT NULL,
party_type varchar(255) NOT NULL,
party_cost int NOT NULL,
client_id int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (client_id) REFERENCES clients(id)
);

INSERT INTO clients (client_name) VALUES ('Jonny');
INSERT INTO clients (client_name) VALUES ('Bobby');

INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Jonnys New Years Party', 'New Years', 600, 1);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Jonnys Chinese New Years Party', 'New Years', 500, 1);

INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Bobbys Baby Shower Party', 'Baby Shower', 200, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Bobbys Cousin Birthday Party', 'Birthday Partyr', 300, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Bobbys Superbowl Party', 'Superbowl Party', 250, 2);

SELECT * FROM clients;
SELECT * FROM parties;

-- DROP DATABASE holiday_party_db;

*/
