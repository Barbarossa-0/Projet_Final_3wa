import express from 'express';
import {getIndex}  from '../models/indexModel.js';
import {getInfos} from '../models/infosModel.js';
import {getQualities} from '../models/qualitiesModel.js'

const router = express.Router();

const indexController = router.get('/', async (req, res) => {

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

    const infos = await getInfos();
    const qualities = await getQualities();
    const index = await getIndex();
     
    var tel = "Tél : ";
    var mail = "Mail : ";
    var ComparAdresse = "Adresse : ";
    var adresse = "";
    var ComparVille = "Ville : ";
    var ville = "";
    var projetRealise = "Projets réalisés : ";
    var client = "Clients : ";
    var machineChantier = "Machines de chantiers : ";
    var noMatches = "";

    infos.forEach(element => {
        if(element.type === tel){
            tel += element.value;
        }else if (element.type === mail){
            mail += element.value;
        }else if (element.type === ComparAdresse){
            adresse += element.value;
        }else if (element.type === ComparVille){
            ville += element.value;
        }else if (element.type === projetRealise){
            projetRealise += element.value;
        }else if (element.type === client){
            client += element.value;
        }else if (element.type === machineChantier){
            machineChantier += element.value;
        }
        else{
            noMatches += " " + element.type + element.value;
        }
    });

    if(noMatches === ""){

    }else{
        console.log(`le type ne correspond pas : ${noMatches}`);
    }
    
    res.render("index", {
        tel: tel,
        mail: mail, 
        adresse: adresse, 
        ville: ville, 
        projetRealise: projetRealise, 
        client: client, 
        machineChantier: machineChantier,
        qualities: qualities,
        cookies: cookies
    });
    
});
export { indexController };