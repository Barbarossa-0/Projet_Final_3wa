import bcrypt from 'bcrypt';

const cryptagHash = async (password) => {
    const result = bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          return false
        } else {
          // Utilisez le hash crypté
          //console.log('Mot de passe crypté :', hash);
          return true
        }
    });

    return result;
}

const cryptagComp = async (password, hash) => {
    const isPasswordMatch = bcrypt.compareSync(password, hash)
    return isPasswordMatch;
}

export {cryptagHash, cryptagComp}