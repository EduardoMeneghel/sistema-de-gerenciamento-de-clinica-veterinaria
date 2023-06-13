export const PostRegister = (fullname, dateOfBirth, gender, email, telephone, password, confirmPassword) => {
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
        'telephone': telephone,
        'password': password,
        'confirmPassword': confirmPassword
    })
    })
    .then(response => {
        if (response.ok) {
        alert('Registro concluído com sucesso');
        } else {
        return response.json().then(json => {
            if (json.message) {
                alert(json.message);
            }
        });
        }
    })
    .catch(error => {
        console.error(error);
    });

  };

  export const PostLogin = (email, password) => {
    if (! email || ! password) {
      alert("Por favor preencha todos os campos!");
      return;
    }
  
    fetch('http://localhost:3002/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'email': email,
        'password': password    
        })
    })
    .then(response => {
        if (response.ok) {
        alert('Registro concluído com sucesso');
        } else {
        return response.json().then(json => {
            if (json.message) {
                return json.message;
            }
        });
        }
    })
    .catch(error => {
        console.error(error);
    });

  };


  export const FetchConfiguration = async (id) => {
    try {
      const response = await fetch('http://localhost:3002/configuration/' + id);
      return await response.json();
    } catch (error) {
      console.log('Error fetching configuration data:', error);
    }
  };