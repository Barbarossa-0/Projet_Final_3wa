import express from 'express';
import fs from 'fs';
import {getArticles}  from '../models/articleModel.js';

const router = express.Router();

const articleController = router.get('/articles/:page', async (req, res) => {

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
    
    const articles = await getArticles();
    
    const { page } = req.params;

    fs.access(`views/articles/${page}.html`, fs.constants.F_OK, (err) => {
        if (err) {
            res.render(`error/notFound`, {
                page: page,
                cookies: cookies
            });
        }else{
            res.render(`articles/${page}`, {
                cookies: cookies
            });
        }
    })

});

export { articleController };
/*
fs.access('views/articles/pret-a-brumiser.html', fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Le fichier n\'existe pas');
      return;
    }
    console.log('Le fichier existe');
  });
*/