const express = require("express");
const { getBooks, tablePage, formPage, createBook, deleteBook, editBook, updateBook } = require("../controllers/bookController");
const bookRouter = express.Router();

bookRouter.get("/",getBooks)
bookRouter.get("/addBook",formPage);
bookRouter.get("/booksList",tablePage);
bookRouter.post("/create",createBook)
bookRouter.get("/delete/:id",deleteBook);
bookRouter.get("/edit/:id",editBook)
bookRouter.post("/update/:id",updateBook)


module.exports = bookRouter;