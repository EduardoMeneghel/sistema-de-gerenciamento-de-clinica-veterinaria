const database = require('../database');
const connection = database.createConnection();

function deleteSpeciesById(request, response) {
    const { id } = request.params;

    connection.query(`DELETE FROM species WHERE id = ${id}`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao fazer a exclusão:', err);
            return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ message: 'Pelo excluído com sucesso' });
    });
}

function findAllSpecies(request, response) {
    connection.query(`SELECT * FROM species;`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json(rows);
    });
}

function insertSpecies(request, response) {
    const { species } = request.body;
    if (!species) {
        return response.status(400).json({ 'message': 'Dados inválidos' });
    }

    connection.query(`INSERT INTO species (species) VALUES('${species}');`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
    });
}


module.exports = {
    deleteSpeciesById, findAllSpecies, insertSpecies
};