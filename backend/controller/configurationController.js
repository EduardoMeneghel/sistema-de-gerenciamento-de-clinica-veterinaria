const database = require('../database');
const connection = database.createConnection();

function getConfigurationById(request, response) {
    const { id } = request.params;

    connection.query(`SELECT * FROM configuration WHERE category = ${id}`, (err, rows, fields) => {
      if (err) {
        console.error('Ocorreu um erro ao fazer a exclusão:', err);
        return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
      }
      return response.status(200).json(rows);
    });
}


module.exports = {
    getConfigurationById
};