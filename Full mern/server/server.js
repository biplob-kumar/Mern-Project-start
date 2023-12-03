
const express = require('express')
const app = express()
const PORT = 5000
const authRoute = require('./router/auth-router')
const ContactRoute=require('./router/contact-router')
const ConnectDb = require('./utils/DbConnection')
const errorMiddleware = require('./middlewares/error_middleware')
require('dotenv').config()

//  middale ware 
app.use(express.json())

//  app 
app.use('/api/auth', authRoute)
app.use('/api/form', ContactRoute)


app.use(errorMiddleware)


// mongo db connection
ConnectDb().then(() => {


    app.listen(PORT, () => {
        console.log(`Server  app listening on port ${PORT}`)
    })
})
