const express = require('express');
const cors = require('cors');
const database = require('./database');
const { generateHash, compareDataToHash } = require('./bcrypt.js');

const app = express();
app.use(express.json());
app.use(cors());

const connection = database.createConnection();

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started`);
});
