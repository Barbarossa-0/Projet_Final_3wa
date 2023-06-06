import express from 'express';
const router = express.Router();

const cookieController = router.get('/accept-cookies', async (req, res) => {
    res.cookie('cookieAccepted', 'true', { maxAge: 1000 * 60 * 60 * 1 });
    
    res.sendStatus(200);
});

export { cookieController };