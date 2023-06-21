const database = require('../database');
const connection = database.createConnection();

function deleteFellById(request, response) {
    const { id } = request.params;

    connection.query(`DELETE FROM fell WHERE id = ${id}`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao fazer a exclusão:', err);
            return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ message: 'Pelo excluído com sucesso' });
    });
}

function findAllFell(request, response) {
    connection.query(`SELECT * FROM fell;`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json(rows);
    });
}

function insertFell(request, response) {
    const { fell } = request.body;
    if (!fell) {
        return response.status(400).json({ 'message': 'Dados inválidos' });
    }

    connection.query(`INSERT INTO fell (fell) VALUES('${fell}');`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
    });
}


module.exports = {
    deleteFellById, findAllFell, insertFell
};