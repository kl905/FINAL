const {Sequelize} = require('sequelize');

module.exports=new Sequelize(
    process.env.DB_NAME,// название бд
    process.env.DB_USER,// имя пользователя бд
    process.env.DB_PASSWORD,// пароль пользователя бд
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,// тип хоста
        port: process.env.DB_PORT,// номер порта
    }
)
