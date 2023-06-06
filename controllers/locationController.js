import express from 'express';
import {getLocation}  from '../models/locationModel.js';

const router = express.Router();

const locationController = router.get('/location', async (req, res) => {
    const location = await getLocation();
    console.log(location + 'location.html');
    res.render("location");
});
export { locationController };