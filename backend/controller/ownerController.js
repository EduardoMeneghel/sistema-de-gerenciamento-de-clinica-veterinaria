const database = require('../database');
const connection = database.createConnection();

function insertOwner(request, response) {
    const { user, animal } = request.body;
    if (!user || !animal) {
        return response.status(400).json({ 'message': 'Dados inválidos' });
    }

    connection.query(`INSERT INTO owner (user_id, animal_id) VALUES('${user}', '${animal}');`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }
        return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
    });
}

function getAnimalsByIdUser(request, response) {
    const { id } = request.params;

    connection.query(`SELECT * FROM owner WHERE user_id = ${id}`, (err, rows, fields) => {
        if (err) {
            console.error('Ocorreu um erro ao executar a consulta:', err);
            return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
        }

        let animal = [];

        function queryAnimals(index) {
            if (index === rows.length) {
                return response.status(200).json(animal);
            }

            const row = rows[index];

            connection.query(`SELECT * FROM animal WHERE id = ${row.animal_id}`, (err, animalRows, fields) => {
                if (err) {
                    console.error('Ocorreu um erro ao executar a consulta:', err);
                    return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
                }

                const animalData = {
                    animal: animalRows[0],
                    fell: [],
                    race: [],
                    species: []
                };

                queryFell(animalData, index);
            });
        }

        function queryFell(animalData, index) {
            connection.query(`SELECT * FROM fell WHERE id = ${animalData.animal.fell_id}`, (err, fellRows, fields) => {
                if (err) {
                    console.error('Ocorreu um erro ao executar a consulta:', err);
                    return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
                }

                animalData.fell = fellRows;

                queryRace(animalData, index);
            });
        }

        function queryRace(animalData, index) {
            connection.query(`SELECT * FROM race WHERE id = ${animalData.animal.race_id}`, (err, raceRows, fields) => {
                if (err) {
                    console.error('Ocorreu um erro ao executar a consulta:', err);
                    return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
                }

                animalData.race = raceRows;

                querySpecies(animalData, index);
            });
        }

        function querySpecies(animalData, index) {
            connection.query(`SELECT * FROM species WHERE id = ${animalData.animal.species_id}`, (err, speciesRows, fields) => {
                if (err) {
                    console.error('Ocorreu um erro ao executar a consulta:', err);
                    return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
                }

                animalData.species = speciesRows;

                animal.push(animalData);

                queryAnimals(index + 1);
            });
        }

        queryAnimals(0);
    });
}


module.exports = {
    insertOwner, getAnimalsByIdUser
};