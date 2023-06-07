import express from 'express';
import fs from 'fs';
import {getRealisations}  from '../models/realisationsModel.js';

const router = express.Router();

const realisationsController = router.get('/realisations/:page', async (req, res) => {

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

    const realisations = await getRealisations();

    const { page } = req.params;

    fs.access(`views/realisations/${page}.html`, fs.constants.F_OK, (err) => {
        if (err) {
            res.render(`error/notFound`, {
                page: page,
                cookies: cookies
            });
        }else{
            res.render(`realisations/${page}`, {
                cookies: cookies
            });
        }
    })
});

export { realisationsController };

