import  Sequelize  from "sequelize";
import db from '../database/connection';

const categorias = db.define('categorias' , {
    id_categoria :  {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre :  {
        type: Sequelize.STRING,
    }  
},{
    timestamps: false,
    freezeTableName: true
});

export default categorias;