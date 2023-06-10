export const Register = (fullname, dateOfBirth, gender, email, telephone, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert('A senha e a confirmação de senha não correspondem');
      return;
    }
  
    fetch('http://localhost:3002/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'name': fullname,
          'dateBirth': dateOfBirth,
          'gender': gender,
          'email': email,
          'telephone':telephone,
          'password': password,
          'confirmPassword': confirmPassword
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Registro concluído com sucesso');
      } else {
        console.log(response);
      }
    })
    .catch(error => {
      alert('Ocorreu um erro de rede');
      console.error(error);
    });
  };