DROP TABLE IF EXISTS Configurations;

CREATE TABLE Configurations(
  id SERIAL PRIMARY KEY,
  name varchar(250),
  hostname varchar(250),
  port Integer,
  username varchar(250)
);

INSERT INTO Configurations (name, hostname, port, username)
Values ('host1', 'nessus-ntp.lab.com', 1241, 'toto');
