CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telephone INT(11),
  gender INT(2),
  date_birthday DATE,
  password VARCHAR(55) NOT NULL
);