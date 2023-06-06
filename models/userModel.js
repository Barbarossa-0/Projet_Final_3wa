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
    const req = 'SELECT users.id, users.name, users.email, users.mdp, users.role_id FROM users WHERE users.name = ? AND users.email = ?;'
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

const insertAdmin = async (name, email, mdp) => {
    const req = 'INSERT INTO users (name, email, mdp, role_id) VALUES (?,?,?,2);'
    const reqName = name
    const reqEmail = email
    const reqMdp = mdp 
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [reqName, reqEmail, reqMdp], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}

const deleteAdmin = async (id) => {
    const req = 'DELETE FROM users WHERE users.id = ?;'
    const reqId = id
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [reqId], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}
export { getUsers, getFoundUser, insertAdmin, deleteAdmin };