import express from 'express';
import {getPrestations}  from '../models/prestationsModel.js';

const router = express.Router();

const prestationsController = router.get('/prestations', async (req, res) => {

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

    const prestations = await getPrestations();

    res.render("prestations", {
        cookies: cookies
    });
});
export { prestationsController };