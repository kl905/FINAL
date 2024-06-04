require('dotenv').config()
const express = require('express')
const Sequelize = require('./db')
const models =  require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

//импорт express.json для парсинга json - формата
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)
//Обработка ошибок (middleware всегда в конце! Т.к. после него работа прекращается)
app.use(errorHandler)



const start = async()=> {
    try{
        await Sequelize.authenticate()// аутентификация к бд
        await Sequelize.sync({ alter: true })//инициализация подключения
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT: ',{PORT}))//сообщение успешного запуска
    } catch(e){
        console.log(e)//ошибка запуска
    }
}

start()
