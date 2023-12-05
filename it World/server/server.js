require("dotenv").config()
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const authroute = require('./router/auth_route')

const contactRoute= require('./router/contact_router')

const ConnectDb = require('./utils/MongoDb')
// error handeling 
const errorMiddleware = require("./middleware/Error_middlewars")
//  midle wares 
app.use(express.json())


// cors  code 

const corsOption={
origin:"http://localhost:5173",
methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
credential:true,
}
app.use(cors(corsOption))



app.use('/api/auth', authroute)
app.use('/api/form', contactRoute)




// error handeling 
app.use(errorMiddleware)




// mongo dbconnection 
ConnectDb().then(()=>{

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`)
})

});