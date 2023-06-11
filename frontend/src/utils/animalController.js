
export const PostFell = (fell) => {
    if (! fell) {
      alert("Por favor preencha todos os campos!");
      return;
    }
  
    fetch('http://localhost:3002/animal/fell', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'fell': fell
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


export const DeleteFell = (id) => {
    fetch(`http://localhost:3002/animal/fell/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        alert('Registro excluido com sucesso');
        } else {
        return response.json().then(json => {
            if (json.message) {
                return json.message;
            }
        });
        }
    })
}

//Species

export const PostSpecies = (species) => {
    if (! species) {
      alert("Por favor preencha todos os campos!");
      return;
    }
  
    fetch('http://localhost:3002/animal/species', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'species': species
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


export const DeleteSpecies = (id) => {
    fetch(`http://localhost:3002/animal/species/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        alert('Registro excluido com sucesso');
        } else {
        return response.json().then(json => {
            if (json.message) {
                return json.message;
            }
        });
        }
    })
}

//Race

export const PostRace = (race, species) => {
    if (! race ||!  species) {
      alert("Por favor preencha todos os campos!");
      return;
    }
  
    fetch('http://localhost:3002/animal/race', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'race': race,
        'species': species
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


export const DeleteRace = (id) => {
    fetch(`http://localhost:3002/animal/race/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        alert('Registro excluido com sucesso');
        } else {
        return response.json().then(json => {
            if (json.message) {
                return json.message;
            }
        });
        }
    })
}