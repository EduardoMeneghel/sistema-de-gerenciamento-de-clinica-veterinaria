const mysql = require('mysql2');

function createConnection() {
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'hvunibave'
    });
    return connection;
}

const connection = createConnection();

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Database connection successfully established!');
  }
});

module.exports = {
  createConnection
};