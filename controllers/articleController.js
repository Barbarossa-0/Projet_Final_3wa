import express from 'express';
import fs from 'fs';
import {getArticles}  from '../models/articleModel.js';

const router = express.Router();

const articleController = router.get('/articles/:page', async (req, res) => {
    
    const articles = await getArticles();
    
    const { page } = req.params;
    console.log(articles + `${page}`);

    fs.access(`views/articles/${page}.html`, fs.constants.F_OK, (err) => {
        if (err) {
            res.render(`error/notFound`, {page: page});
        }else{
            res.render(`articles/${page}`);
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