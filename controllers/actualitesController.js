import express from 'express';
import {getAcutalites}  from '../models/actualitesModel.js';

const router = express.Router();

const actualitesController = router.get('/actualites', async (req, res) => {
    const acutalites = await getAcutalites();
    console.log(acutalites + 'actualite.html');
    res.render("actualites");
});
export { actualitesController };