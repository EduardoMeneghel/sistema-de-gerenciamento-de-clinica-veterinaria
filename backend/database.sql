CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telephone BIGINT(15),
  gender INT(2),
  date_of_birth DATE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE fell (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fell VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE species (
  id INT AUTO_INCREMENT PRIMARY KEY,
  species VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE race (
  id INT AUTO_INCREMENT PRIMARY KEY,
  race VARCHAR(50) UNIQUE NOT NULL,
  species_id INT,
  FOREIGN KEY (species_id) REFERENCES species(id)
);

CREATE TABLE animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  species_id INT(10) NOT NULL,
  race_id INT(10) NOT NULL,
  fell_id INT(10) NOT NULL,
  gender INT(2),
  date_of_birth DATE,
  FOREIGN KEY (species_id) REFERENCES species(id),
  FOREIGN KEY (race_id) REFERENCES race(id),
  FOREIGN KEY (fell_id) REFERENCES fell(id)
);

CREATE TABLE configuration (
  id INT(11) NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(50) NOT NULL,
  status INT(2) NOT NULL,
  name VARCHAR(50) NOT NULL,
  value VARCHAR(50) NOT NULL,
  category INT(2) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE owner (
  id INT AUTO_INCREMENT PRIMARY KEY,
  animal_id INT(10) NOT NULL,
  user_id INT(10) NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animal(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

