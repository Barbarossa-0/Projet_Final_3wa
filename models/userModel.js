import db from './database/database.js'

const getUsers = async () => {
    const req = 'SELECT * FROM users'
    
    const results = await new Promise( (resolve, reject) => {
        db.query(req, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}

const getFoundUser = async (name, email) => {
    const req = 'SELECT users.id, users.name, users.email, users.mdp, users.role_id FROM users WHERE users.name = ? AND users.email = ?'
    const reqName = name
    const reqEmail = email
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [reqName, reqEmail], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}

export { getUsers, getFoundUser };