const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connect = require("./config/mongodb")
const authUserRouter = require("./routes/auth")
const authEmployeRouter = require("./routes/employe")
 const cors = require("cors")
connect()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
  app.use("/api/users/",authUserRouter)
app.use("/api/employ",authEmployeRouter)

const PORT = 8000;

app.listen(PORT,()=>{
    console.log('server is running');
})