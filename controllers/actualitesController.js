import express from 'express';
import { getAcutalites }  from '../models/actualitesModel.js';

const router = express.Router();

const actualitesController = router.get('/actualites', async (req, res) => {

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

    const acutalites = await getAcutalites();
    res.render("actualites", {
        cookies: cookies
    });

});
export { actualitesController };