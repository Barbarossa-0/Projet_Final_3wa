import express from 'express';

import {getInfos, updateInfos} from '../models/infosModel.js';

import {getQualities, upadteQualitie, insertQualitie, deleteQualitie} from '../models/qualitiesModel.js';
import {generateToken, verifyToken} from '../controllers/token.js'
import {getUsers, getFoundUser} from '../models/userModel.js'
import {cryptagHash, cryptagComp} from '../models/cryptagon.js'
const router = express.Router();

const administrationController = router.get('/admin', async (req, res) => {
    var error = false
    res.render("administration/login", {
        error: error
    });
});

const signIn = router.post('/admin/signIn', async (req, res) => {

    var error = false
    
    const infos = await getInfos();
    //const connections = getConnection();
    //const userRole = getUserRole();
    const qualities = await getQualities();
    
    const userId = 0
    const name = req.body.username
    const email = req.body.email
    const mdp = req.body.password

    const userData = await getFoundUser(name, email);

     
    const dbPass = userData[0].mdp
    const compatibleUser = await cryptagComp(mdp, dbPass)
    console.log(userData.role)
    if(compatibleUser){
        const token = generateToken(userId, name, email)
        req.session.userId = userData[0].id
        req.session.userName = userData[0].name
        req.session.userEmail = userData[0].email
        req.session.userRole = userData[0].role
        req.session.token = token;

        res.render("administration/administration", {
            infos: infos,
            //connections: connections,
            userRole: userData[0].role,
            qualities: qualities,

        });

    }else{
        error = 'Incorrect veuilliez ressayer.'
        res.render("administration/login", {
            error: error
        });
    }

    
});

const updInfo = router.post('/admin/updInfo', verifyToken, async (req, res) => {
    const id = req.body.infoId
    const value = req.body.infoValue
    const request = await updateInfos(id, value);
    console.log(request)

    const infos = await getInfos();
    //const connections = getConnection();
    //const userRole = getUserRole();
    const qualities = await getQualities();

    res.render("administration/administration", {
        infos: infos,
        //connections: connections,
        //userRole: userRole,
        qualities: qualities
    });
});

const updQualities = router.post('/admin/updQualities', verifyToken, async (req, res) => {
    
    const id = req.body.qualitiesId
    const title = req.body.qualitiesTitle
    const description = req.body.qualitiesDescription

    const request = await upadteQualitie(id, title, description);
    console.log(request)

    const infos = await getInfos();
    //const connections = getConnection();
    //const userRole = getUserRole();
    const qualities = await getQualities();

    res.render("administration/administration", {
        infos: infos,
        //connections: connections,
        //userRole: userRole,
        qualities: qualities
    });
});

const addQualities = router.post('/admin/addQualities', verifyToken, async (req, res) => {
    
    const title = req.body.newTitleQualitie
    const description = req.body.newDescriptionQualitie

    const request = await insertQualitie(title, description);
    console.log(request)

    const infos = await getInfos();
    //const connections = getConnection();
    //const userRole = getUserRole();
    const qualities = await getQualities();
    res.render("administration/administration", {
        infos: infos,
        //connections: connections,
        //userRole: userRole,
        qualities: qualities
    });
});

const delQualities = router.post('/admin/delQualities', verifyToken, async (req, res) => {
    
    const id = req.body.delqualitiesId

    const request = await deleteQualitie(id);
    console.log(request)

    const infos = await getInfos();
    //const connections = getConnection();
    //const userRole = getUserRole();
    const qualities = await getQualities();
    
    res.render("administration/administration", {
        infos: infos,
        //connections: connections,
        //userRole: userRole,
        qualities: qualities
    });
});


export { administrationController, signIn, updInfo, updQualities, addQualities, delQualities };