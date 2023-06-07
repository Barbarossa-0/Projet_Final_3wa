/*
faire les requetes.
faire admin page.
faire authentification.
session utilisateur et mémoriser les 
données ou les actions d’un utilisateur de manière 
faiire la securiter mdp crypatge etc

*/
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import ejs from 'ejs';

const app = express();
const port = 8888;
const oneDay = 1000 * 60 * 60 * 24;

/* variable clef secrete ecrite avec 1 place de decalage dans l'alphabet pour la discretion */
const tfdsfu_lfz = process.env.SECRET_KEY
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    secret: tfdsfu_lfz,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


app.set('views', './views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static('public'))
app.use(express.static('img'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(cookieParser());

// Import des contrôleurs
import {indexController} from './controllers/indexController.js';
import {prestationsController} from './controllers/prestationsController.js';
import {locationController} from './controllers/locationController.js';
import {actualitesController} from './controllers/actualitesController.js';
import {articleController} from './controllers/articleController.js';
import {realisationsController} from './controllers/realisationsController.js'
import {administrationController, signIn, updInfo, updQualities, addQualities, delQualities, addAdmin, suppAdmin} from './controllers/administrationController.js';
import {cookieController} from './controllers/cookieController.js';


// Routes vers les contrôleurs
app.use('/',
        indexController,
        prestationsController, 
        locationController, 
        actualitesController,
        articleController,
        realisationsController,
        administrationController,
        signIn,
        updInfo,
        updQualities,
        addQualities,
        delQualities,
        cookieController,
        addAdmin, 
        suppAdmin
        );


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}/`);
});