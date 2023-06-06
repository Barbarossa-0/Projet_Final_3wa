import bcrypt from 'bcrypt';

const cryptagHash = async (password) => {
    const result = bcrypt.hash(password, 10)
    return result;
}

const cryptagComp = async (password, hash) => {
    const isPasswordMatch = bcrypt.compareSync(password, hash)
    return isPasswordMatch;
}

export {cryptagHash, cryptagComp}