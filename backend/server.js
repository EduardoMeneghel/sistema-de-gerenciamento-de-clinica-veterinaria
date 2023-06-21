const express = require('express');
const cors = require('cors');
const { generateHash, compareDataToHash } = require('./bcrypt.js');

const app = express();
app.use(express.json());
app.use(cors());

const userController = require('./controller/userController');
const configurationController = require('./controller/configurationController');
const ownerController = require('./controller/ownerController');
const raceController = require('./controller/raceController');
const speciesController = require('./controller/speciesController');
const fellController = require('./controller/fellController');
const animalController = require('./controller/animalController');

app.get('/animal', animalController.findAllAnimal);

app.post('/animal', animalController.insertAnimal);

//fell
app.post('/animal/fell', fellController.insertFell);

app.get('/animal/fell', fellController.findAllFell);

app.delete('/animal/fell/:id', fellController.deleteFellById);

//species
app.post('/animal/species', speciesController.insertSpecies);

app.get('/animal/species', speciesController.findAllSpecies);

app.delete('/animal/species/:id', speciesController.deleteSpeciesById);

//race
app.post('/animal/race', raceController.insertRace);

app.get('/animal/race', raceController.findAllRace);

app.delete('/animal/race/:id', raceController.deleteAnimalById);

//owner
app.post('/owner', ownerController.insertOwner);

app.get('/owner/user/:id', ownerController.getAnimalsByIdUser);

//configuration
app.get('/configuration/:id', configurationController.getConfigurationById);

//user
app.post('/login', userController.login);

app.post('/register', userController.register);

app.get('/user', userController.findAllUser);

app.listen(3002, () => {
  console.log(`server started`);
});
