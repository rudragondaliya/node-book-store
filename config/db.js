const mongoose = require("mongoose")

const db = async()=>{
    await mongoose.connect("mongodb+srv://gondaliyarudra2516:12345@product.4inbxkp.mongodb.net/books").then(()=>{
        console.log("Database Connected..");
        
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = db;