import express from 'express';
import fs from 'fs';
import {getRealisations}  from '../models/realisationsModel.js';

const router = express.Router();

const realisationsController = router.get('/realisations/:page', async (req, res) => {

    const realisations = await getRealisations();

    const { page } = req.params;
    console.log(realisations + `${page}`);

    fs.access(`views/realisations/${page}.html`, fs.constants.F_OK, (err) => {
        if (err) {
            res.render(`error/notFound`, {page: page});
        }else{
            res.render(`realisations/${page}`);
        }
    })
});

export { realisationsController };

