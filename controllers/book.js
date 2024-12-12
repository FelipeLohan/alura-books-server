const { getAllBooks, getBookById, addBook } = require("../services/book.js");

function getLivros(req, res) {
  try {
    const booksData = getAllBooks();
    res.send(booksData);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id
    const book = getBookById(id);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res){
  try{
    const newBook = req.body;
    addBook(newBook)
    res.status(201)
    res.send("Livro inserido com sucesso")
  } catch{
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getLivros,
  getBook,
  postBook
};
