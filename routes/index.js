var express = require('express');
var router = express.Router();
var peliculas = require('../public/model/peliculasModel');

/* GET home page. */
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

module.exports = router;
