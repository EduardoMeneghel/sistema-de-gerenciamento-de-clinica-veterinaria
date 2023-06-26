const database = require('../database');
const connection = database.createConnection();

test('test database connection', () => {
  expect(connection).toBeDefined();
  expect(connection).toHaveProperty('config');
  expect(connection.config.host).toBe('localhost');
  expect(connection.config.user).toBe('root');
  expect(connection.config.password).toBe('123');
  expect(connection.config.database).toBe('hvunibave');
});
