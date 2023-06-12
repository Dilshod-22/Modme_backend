const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connect = require("./config/mongodb")
const authUserRouter = require("./routes/auth")
const authEmployeRouter = require("./routes/employe")
 
connect()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/api/users/",authUserRouter)
app.use("/api/employ",authEmployeRouter)

const PORT = 8000;

app.listen(PORT,()=>{
    console.log('server is running');
})