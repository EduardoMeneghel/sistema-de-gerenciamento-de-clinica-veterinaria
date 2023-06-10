const express = require('express');
const cors = require('cors');
const database = require('./database');
const { generateHash, compareDataToHash } = require('./bcrypt.js');

const app = express();
app.use(express.json());
app.use(cors());

const connection = database.createConnection();

app.post('/login', (request, response) => {
  const { loginEmail, loginPassword } = request.body;

  connection.query(`SELECT * FROM users WHERE ds_email = '${loginEmail}'`, (err, rows, fields) => {
    if (!rows || !loginEmail || !loginPassword) {
      return response.status(400).send('Conta ou senha inválida');
    }

    const isAValidPassword = compareDataToHash(loginPassword, rows[0].password);
    if (isAValidPassword && rows[0].email == loginEmail) {
      return response.status(200).send('Login concluído com sucesso');
    } else {
      return response.status(400).send('Conta ou senha inválida');
    }
  });
});

app.post('/register', (request, response) => {
  try {

    const { name, dateBirth, gender, email, telephone, password, confirmPassword } = request.body;
    if (password !== confirmPassword) {
      return response.status(400).send('A senha e a confirmação de senha não correspondem');
    } else if (! dateBirth) {
      return response.status(400).send('Data de nascimento inválida');
    } else if (! gender) {
      return response.status(400).send('Genero inválida');
    } else if (telephone.length < 8) {
      return response.status(400).send('Telefone inválida');
    } else if (password.length < 8) {
      return response.status(400).send('Senha inválida, por favor coloque uma senha com no minimo 8 digitos');
    }

    const hash = generateHash(password);

    connection.query(`INSERT INTO user (name, email, telephone, gender, date_birthday, password) VALUES('${name}', '${email}', '${telephone}', '${gender}', '${dateBirth}', '${hash}');`, (err, rows, fields) => {
      if (err) {
        console.error('Ocorreu um erro ao executar a consulta:', err);
        return response.status(500).send('Ocorreu um erro no registro');
      }
    });

    return response.status(200).send('Registro concluído com sucesso');
  } catch (error) {
    console.error(error);
    return response.status(500).send('Ocorreu um erro no registro');
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started`);
});
