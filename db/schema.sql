DROP TABLE IF EXISTS Configurations;

CREATE TABLE Configurations(
  id SERIAL PRIMARY KEY,
  name varchar(250),
  port Integer,
  username varchar(250)
);
