const books = require("../models/bookSchema");

exports.getBooks = async(req,res)=>{
    res.render("index")
}

exports.formPage = async(req,res)=>{
    res.render("pages/form-basic",{book : null});
}

exports.tablePage = async(req,res)=>{
    const booksData =  await books.find();
    res.render("pages/tables",{booksData})
}

exports.createBook = async(req,res)=>{
    try {
        await books.create(req.body)
        res.redirect("/booksList");
    } catch (error) {
        console.log(error.message);
        
    }
}

exports.deleteBook = async(req,res)=>{
    try {
        await books.findByIdAndDelete(req.params.id)
        res.redirect("/booksList");
    } catch (error) {
        console.log(error.message);
        
    }
}

exports.editBook = async(req,res)=>{
    try {
        const book   = await books.findById(req.params.id)
        res.render("pages/form-basic",{book})
    } catch (error) {
        console.log(error.message);
        
    }
}

exports.updateBook = async(req,res)=>{
    try {
        await books.findByIdAndUpdate(req.params.id,req.body);
        res.redirect("/booksList");
    } catch (error) {
        console.log(error.message);
        
    }
}

