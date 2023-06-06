import db from './database/database.js'

const getInfos = async () => {
    const req = 'SELECT id, type, value FROM bisnessinfos'

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
const updateInfos = async (tid, tvalue) => {
    const req = 'UPDATE bisnessinfos SET value = ? WHERE bisnessinfos.id = ?; '
    const id = tid
    const value = tvalue
    const results = await new Promise( (resolve, reject) => {
        db.query(req, [value, id], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    return results;
}
export { getInfos,  updateInfos};