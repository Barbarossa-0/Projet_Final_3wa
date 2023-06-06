import express from 'express';
import {getPrestations}  from '../models/prestationsModel.js';

const router = express.Router();

const prestationsController = router.get('/prestations', async (req, res) => {
    const prestations = await getPrestations();
    console.log(prestations + 'prestation.html');
    res.render("prestations");
});
export { prestationsController };