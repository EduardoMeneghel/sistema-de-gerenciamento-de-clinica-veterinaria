const bcrypt = require('bcrypt');

function generateHash(data) {
    return bcrypt.hashSync(data, 10);
}

function compareDataToHash (data, hash) {
    return bcrypt.compareSync(data, hash)
}

module.exports = {
    generateHash,
    compareDataToHash
  };