const database = require('../database');
const connection = database.createConnection();

function insertAnimal(request, response) {
    const { name, speciesId, raceId, fellId, genderId, date } = request.body;
    if (!name || !speciesId || !raceId || !fellId || !genderId || !date) {
        return response.status(400).json({ 'message': 'Dados inválidos' });
    }

    connection.query(`INSERT INTO animal (name, species_id, race_id, fell_id, gender, date_of_birth ) VALUES('${name}', '${speciesId}', '${raceId}', '${fellId}', '${genderId}', '${date}');`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
    });
}

function findAllAnimal(request, response) {
    connection.query(`SELECT * FROM animal;`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json(rows);
    });
}

module.exports = {
    insertAnimal, findAllAnimal
};