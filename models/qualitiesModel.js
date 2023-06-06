import db from './database/database.js'

const getQualities = async () => {
    const req = 'SELECT * FROM qualities;'
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
const upadteQualitie = async (tid, ttitle, tdescription) => {
    const req = 'UPDATE qualities SET title = ?, description = ? WHERE qualities.id = ?; '
    const id = tid
    const title = ttitle
    const description = tdescription
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [title, description, id], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}
const insertQualitie = async (ttitle, tdescription) => {
    const req = 'INSERT INTO qualities (id, title, description) VALUES (NULL,?,?); '
    const title = ttitle
    const description = tdescription
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [title, description], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}
const deleteQualitie = async (tid) => {
    const req = ' DELETE FROM qualities WHERE qualities.id = ?; '
    const id = tid
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [id], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}
export {getQualities, upadteQualitie, insertQualitie, deleteQualitie};