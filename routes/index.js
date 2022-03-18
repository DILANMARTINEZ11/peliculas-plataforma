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

router.get('/movies/category/:id', async function(req, res, next) {
  try {
    const movies = await peliculas.findAll({
      where: {
        categoria_id: req.params.id
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

router.put('/movies/:id', async function(req,res,next){
   try {
    await peliculas.update(req.body, {
      where: {
        id_pelicula: req.params.id
      }
    });
    res.status(200).json({"update" : 1});
   } catch (error) {
     res.status(500).json(error);
   }
});

router.delete('/movies/:id' , async function(req,res,next){
    try {
      await peliculas.destroy({
        where: {
          id_pelicula: req.params.id
        }
      });
      res.status(200).json({"delete" : 1})
    } catch (error) {
      res.status(500).json(error);      
    }
})

module.exports = router;
