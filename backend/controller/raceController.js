const database = require('../database');
const connection = database.createConnection();

function deleteRaceById(request, response) {
    const { id } = request.params;

    connection.query(`DELETE FROM race WHERE id = ${id}`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao fazer a exclusão:', err);
            return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ message: 'Pelo excluído com sucesso' });
    });
}

function findAllRace(request, response) {
    connection.query(`SELECT * FROM race;`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json(rows);
    });
}

function insertRace(request, response) {
    const { race, species } = request.body;
    if (!race || !species) {
        return response.status(400).json({ 'message': 'Dados inválidos' });
    }

    connection.query(`INSERT INTO race (race, species_id) VALUES('${race}', '${species}');`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
    });
}


module.exports = {
    deleteRaceById, findAllRace, insertRace
};