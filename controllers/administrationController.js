import express from 'express';
import {getInfos, updateInfos} from '../models/infosModel.js';
import {getQualities, upadteQualitie, insertQualitie, deleteQualitie} from '../models/qualitiesModel.js';
import {generateToken, verifyToken} from '../controllers/token.js'
import {getUsers, getFoundUser, insertAdmin, deleteAdmin} from '../models/userModel.js'
import {cryptagHash, cryptagComp} from '../models/cryptagon.js'

const router = express.Router();
const numberRegex = /^\d+$/;

const administrationController = router.get('/admin', async (req, res) => {

    const existCookies = req.cookies
    var cookieAccepted = false
    var cookies = false

    if(existCookies){
        var cookieAccepted = true;
    }else{
        var cookieAccepted = req.cookies.cookieAccepted
    }
    
    if (!cookieAccepted) {
        cookies = false
    }
    else{
        cookies = true
    }

    var error = false

    res.render("administration/login", {
        error: error,
        cookies: cookies
    });
});

const signIn = router.post('/admin/signIn', async (req, res) => {

    var error = false
    
    const name = req.body.username
    const email = req.body.email
    const mdp = req.body.password

    if (name.length === 0) {
        error = 'Veuilliez remplir le champ Nom.'
    }
    if (email.length === 0) {
        error = 'Veuilliez remplir le champ Email.'
    }
    if (mdp.length === 0) {
        error = 'Veuilliez remplir le champ Mot de passe.'
    }

    const infos = await getInfos();
    const qualities = await getQualities();
    
    const userData = await getFoundUser(name, email);

    const dbPass = userData[0].mdp
    
    const compatibleUser = await cryptagComp(mdp, dbPass)
    const id = userData[0].id
    const role = userData[0].role_id
    
    if(compatibleUser){
        const token = generateToken(id, name, email)
        req.session.userId = id
        req.session.userName = name
        req.session.userEmail = email
        req.session.userRole = role
        req.session.token = token;
        const listUsers = await getUsers();
        res.render("administration/administration", {
            infos: infos,
            userRole: role,
            qualities: qualities,
            listUsers: listUsers,
            error: error
        });

    }else{
        res.render("administration/login", {
            error: error
        });
    }

    
});

const updInfo = router.post('/admin/updInfo', verifyToken, async (req, res) => {

    var error = false

    const id = req.body.infoId
    const value = req.body.infoValue

    if (id.length === 0 || !id.match(numberRegex)) {
        error = 'Informations Non Identifier.'
    }
    if (value.length === 0 || value.length === 61) {
        error = 'Informations vide ou trop longue.'
    }
    if(!error){
        const request = await updateInfos(id, value);
    }

    const listUsers = await getUsers();
    const infos = await getInfos();
    const qualities = await getQualities();

    const role = req.session.userRole 

    res.render("administration/administration", {
        infos: infos,
        listUsers: listUsers,
        userRole: role,
        qualities: qualities,
        error:error
    });
});

const updQualities = router.post('/admin/updQualities', verifyToken, async (req, res) => {
    var error = false
    const id = req.body.qualitiesId
    const title = req.body.qualitiesTitle
    const description = req.body.qualitiesDescription

    if (id.length === 0 || !id.match(numberRegex)) {
        error = 'Qualités Non Identifier.'
    }
    if (title.length === 0 || title.length === 61) {
        error = 'Titre vide ou trop long.'
    }
    if (description.length === 0 || description.length === 351) {
        error = 'Description vide ou trop longue.'
    }
    if(!error){
        const request = await upadteQualitie(id, title, description);
    }

    const listUsers = await getUsers();
    const infos = await getInfos();
    const qualities = await getQualities();

    const role = req.session.userRole 

    res.render("administration/administration", {
        infos: infos,
        listUsers: listUsers,
        userRole: role,
        qualities: qualities,
        error:error
    });
});

const addQualities = router.post('/admin/addQualities', verifyToken, async (req, res) => {

    var error = false

    const title = req.body.newTitleQualitie
    const description = req.body.newDescriptionQualitie

    if (title.length === 0 || title.length === 61) {
        error = 'Titre vide ou trop long.'
    }
    if (description.length === 0 || description.length === 351) {
        error = 'Description vide ou trop longue.'
    }
    if(!error){
        const request = await insertQualitie(title, description);
    }

    const listUsers = await getUsers();
    const infos = await getInfos();
    const qualities = await getQualities();

    const role = req.session.userRole 

    res.render("administration/administration", {
        infos: infos,
        listUsers: listUsers,
        userRole: role,
        qualities: qualities,
        error:error
    });
});

const delQualities = router.post('/admin/delQualities', verifyToken, async (req, res) => {

    var error = false

    const id = req.body.delqualitiesId

    if (id.length === 0 || !id.match(numberRegex)) {
        error = 'Qualités Non Identifier.'
    }
    if(!error){
        const request = await deleteQualitie(id);
    }

    

    const infos = await getInfos();
    const qualities = await getQualities();
    const listUsers = await getUsers();

    const role = req.session.userRole 

    res.render("administration/administration", {
        listUsers: listUsers,
        infos: infos,
        userRole: role,
        qualities: qualities,
        error:error
    });
});

const addAdmin = router.post('/admin/addAdmin', verifyToken, async (req, res) => {
    
    var error = false
    var existName = false

    const name = req.body.nameAdmin
    const email = req.body.emailAdmin
    const mdp = req.body.mdpAdmin

    if (name.length === 0 || name.length === 61) {
        error = "le nom est trop long ou vide"
    }
    if (email.length === 0 || email.length === 121) {
        error = "l'email est trop long ou vide"
    }
    if (mdp.length === 0 || mdp.length < 8 || mdp.length === 61) {
        error = "le mdp est trop court ou vide"
    }

    const listUsers = await getUsers();

    for (const user of listUsers) {
        if (user.name === name) {
          existName = true;
          error = "Il ne peux pas y avoir deux admin avec le méme nom"
          break;
        }
    }

    const cryptedMdp = await cryptagHash(mdp)

    if(!error){
        const request = await insertAdmin(name, email, cryptedMdp);
    }
    
    const infos = await getInfos();
    const qualities = await getQualities();
    
    const role = req.session.userRole 

    res.render("administration/administration", {
        listUsers: listUsers,
        infos: infos,
        userRole: role,
        qualities: qualities,
        error:error
    });
});

const suppAdmin = router.post('/admin/suppAdmin', verifyToken, async (req, res) => {

    var error = false 

    const id = req.body.suppAdmin

    if (id.length === 0 || !id.match(numberRegex) || id === 1) {
        error = 'Admin Non Identifier.'
    }
    if(!error){
        const request = await deleteAdmin(id);
    }

    const infos = await getInfos();
    const qualities = await getQualities();
    const listUsers = await getUsers();

    const role = req.session.userRole

    res.render("administration/administration", {
        infos: infos,
        userRole: role,
        qualities: qualities,
        listUsers: listUsers,
        error:error
    });
    
     
    
});

export { administrationController, signIn, updInfo, updQualities, addQualities, delQualities, addAdmin, suppAdmin };