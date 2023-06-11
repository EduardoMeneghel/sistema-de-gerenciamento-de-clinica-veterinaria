const express = require('express');
const cors = require('cors');
const database = require('./database');
const { generateHash, compareDataToHash } = require('./bcrypt.js');

const app = express();
app.use(express.json());
app.use(cors());

const connection = database.createConnection();


app.post('/animal/fell', (request, response) => {
  const { fell } = request.body;
  if ( ! fell) {
    return response.status(400).json({ 'message': 'Dados inválidos' });
  }

  connection.query(`INSERT INTO fell (fell) VALUES('${fell}');`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
  });
});

app.get('/animal/fell', (request, response) => {

  connection.query(`SELECT * FROM fell;`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json(rows);
  });
});

app.put('/animal/fell', (request, response) => {
 
});

app.delete('/animal/fell/:id', (request, response) => {
  const { id } = request.params;

  connection.query(`DELETE FROM fell WHERE id = ${id}`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao fazer a exclusão:', err);
      return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ message: 'Pelo excluído com sucesso' });
  });
});


app.post('/animal/species', (request, response) => {
  const { species } = request.body;
  if ( ! species) {
    return response.status(400).json({ 'message': 'Dados inválidos' });
  }

  connection.query(`INSERT INTO species (species) VALUES('${species}');`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
  });
});

app.get('/animal/species', (request, response) => {

  connection.query(`SELECT * FROM species;`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json(rows);
  });
});

app.put('/animal/species', (request, response) => {
 
});

app.delete('/animal/species/:id', (request, response) => {
  const { id } = request.params;

  connection.query(`DELETE FROM species WHERE id = ${id}`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao fazer a exclusão:', err);
      return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ message: 'Pelo excluído com sucesso' });
  });
});


app.post('/animal/race', (request, response) => {
  const { race, species } = request.body;
  if ( ! race || ! species) {
    return response.status(400).json({ 'message': 'Dados inválidos' });
  }

  connection.query(`INSERT INTO race (race, species_id) VALUES('${race}', '${species}');`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ 'message': 'Pelo Cadastrado com sucesso' });
  });
});

app.get('/animal/race', (request, response) => {

  connection.query(`SELECT * FROM race;`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json(rows);
  });
});

app.put('/animal/race', (request, response) => {
 
});

app.delete('/animal/race/:id', (request, response) => {
  const { id } = request.params;

  connection.query(`DELETE FROM race WHERE id = ${id}`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao fazer a exclusão:', err);
      return response.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json({ message: 'Pelo excluído com sucesso' });
  });
});



app.post('/login', (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({ 'message': 'Conta ou senha inválida' });
  }
  connection.query(`SELECT * FROM user WHERE email = '${email}'`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    if (!rows.length) {
      return response.status(400).json({ 'message': 'Conta ou senha inválida' });
    }
    const isAValidPassword = compareDataToHash(password, rows[0].password);
    if (isAValidPassword) {
      return response.status(200).json({ 'message': 'Login concluído com sucesso' });
    } else {
      return response.status(400).json({ 'message': 'Conta ou senha inválida' });
    }
  });
});

app.post('/register', (request, response) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    const { name, dateBirth, gender, email, telephone, password, confirmPassword } = request.body;
    if (! name || name.length < 3) {
      return response.status(400).json({'message' : 'Nome Inválido'});
    } else if (! dateBirth) {
      return response.status(400).json({'message' : 'Data de nascimento inválida'});
    } else if (! gender) {
      return response.status(400).json({'message' : 'Genero inválida'});
    } else if (! email || ! emailRegex.test(email)) {
      return response.status(400).json({'message' : 'Email inválido'});
    } else if (! telephone || ! phoneRegex.test(telephone)) {
      return response.status(400).json({'message' : 'Telefone inválida'});
    } else if (password !== confirmPassword) {
      return response.status(400).json({'message' : 'A senha e a confirmação de senha não correspondem'});
    }

    const hash = generateHash(password);
    connection.query(`INSERT INTO user (name, email, telephone, gender, date_birthday, password) VALUES('${name}', '${email}', '${telephone}', '${gender}', '${dateBirth}', '${hash}');`, (err, rows, fields) => {
      if (err) {
        console.error('Ocorreu um erro ao executar a consulta:', err);
        return response.status(500).json({'message' : 'Ocorreu um erro no registro'});
      } else {
        return response.status(200).json({'message' : 'Registro concluído com sucesso'});
      }
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({'message' : 'Ocorreu um erro no registro'});
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started`);
});
