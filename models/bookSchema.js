const express = require("express")
const { default: mongoose } = require("mongoose")

const bookSchema = new mongoose.Schema({
    b_name:{
        type:String,
        required:true,
    },
    b_price:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    }

    
},{
    timestamps:true,
})

const books = mongoose.model("bookTbl",bookSchema);

module.exports = books