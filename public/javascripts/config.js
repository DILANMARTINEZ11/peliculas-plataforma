module.exports = {
    HOST: "dilan.cdbuxmj3rlav.us-east-2.rds.amazonaws.com",
    USER: "dilan",
    PASSWORD: "12345678",
    DB: "plataforma_peliculas",
    dialect: "mysql",
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };