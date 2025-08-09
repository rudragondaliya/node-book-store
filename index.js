const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routers");
const db = require("./config/db");
const app = express();
const port = 8900;

db();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static("public"))


app.use("/",router)


app.listen(port,(error)=>{
    if(!error){
        console.log("server is started",port);
        console.log("http://localhost:"+port);
    }
})