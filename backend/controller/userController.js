
const database = require('../database');
const bcrypt = require('../bcrypt');
const connection = database.createConnection();

function login(request, response) {
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

    const isAValidPassword =  bcrypt.compareDataToHash(password, rows[0].password);

    if (isAValidPassword) {
      return response.status(200).json({ 'message': 'Login concluído com sucesso' });
    } else {
      return response.status(400).json({ 'message': 'Conta ou senha inválida' });
    }
  });
}

function register(request, response) {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    const { name, dateBirth, gender, email, telephone, password, confirmPassword } = request.body;
    if (!name || name.length < 3) {
      return response.status(400).json({ 'message': 'Nome Inválido' });
    } else if (!dateBirth) {
      return response.status(400).json({ 'message': 'Data de nascimento inválida' });
    } else if (!gender) {
      return response.status(400).json({ 'message': 'Genero inválida' });
    } else if (!email || !emailRegex.test(email)) {
      return response.status(400).json({ 'message': 'Email inválido' });
    } else if (!telephone || !phoneRegex.test(telephone)) {
      return response.status(400).json({ 'message': 'Telefone inválida' });
    } else if (password !== confirmPassword) {
      return response.status(400).json({ 'message': 'A senha e a confirmação de senha não correspondem' });
    }

    const hash = bcrypt.generateHash(password);
    connection.query(`INSERT INTO user (name, email, telephone, gender, date_of_birth, password) VALUES('${name}', '${email}', '${telephone}', '${gender}', '${dateBirth}', '${hash}');`, (err, rows, fields) => {
      if (err) {
        console.error('Ocorreu um erro ao executar a consulta:', err);
        return response.status(500).json({ 'message': 'Ocorreu um erro no registro' });
      } else {
        return response.status(200).json({ 'message': 'Registro concluído com sucesso' });
      }
    });

  } catch (error) {
    console.error(error);
    return response.status(500).json({ 'message': 'Ocorreu um erro no registro' });
  }
}

function findAllUser(request, response) {
  connection.query(`SELECT * FROM user;`, (err, rows, fields) => {
    if (err) {
      console.error('Ocorreu um erro ao executar a consulta:', err);
      return response.status(500).json({ 'message': 'Ocorreu um erro no servidor' });
    }
    return response.status(200).json(rows);
  });
}

module.exports = {
  login, register, findAllUser
};