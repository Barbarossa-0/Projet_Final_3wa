import express from 'express';
import {getLocation}  from '../models/locationModel.js';

const router = express.Router();

const locationController = router.get('/location', async (req, res) => {

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

    const location = await getLocation();

    res.render("location", {
        cookies: cookies
    });
});
export { locationController };