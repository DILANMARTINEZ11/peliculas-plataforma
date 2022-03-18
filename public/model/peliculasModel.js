var  Sequelize  = require('sequelize');
var db = require('../database/connection');

const peliculas = db.define('peliculas' , {
    id_pelicula :  {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    caratula :  {
        type: Sequelize.BLOB,
    },
    titulo :  {
        type: Sequelize.STRING,
    },
    descripcion :  {
        type: Sequelize.STRING,
    },
    duracion :  {
        type: Sequelize.TIME,
    },
    categoria_id :  {
        type: Sequelize.INTEGER,
        references: {
            model: 'categorias',
            key: 'id_categoria'
          },
    },
    trailer_yt :  {
        type: Sequelize.STRING,
    },
    fecha_estreno :  {
        type: Sequelize.STRING,
    }  
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  peliculas ;