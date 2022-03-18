var express = require('express');
var router = express.Router();
var peliculas = require('../public/model/peliculasModel');


router.get('/movies', async function(req, res, next) {
  try {
    const movies = await peliculas.findAll();
    return res.status(200).json({
       movies
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/movies/:id', async function(req, res, next) {
  try {
    const movies = await peliculas.findAll({
      where: {
        id_pelicula: req.params.id
      }
    });
    return res.status(200).json({
       movies
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post('/movies' , async function(req,res,next){
  try {
    let data = req.body;
    const create = await peliculas.create(data);
    res.status(200).json(create) 
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
