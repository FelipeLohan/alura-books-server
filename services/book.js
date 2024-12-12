const fs = require("fs");

function getAllBooks(){
  return JSON.parse( fs.readFileSync("books.json"))
} 

function getBookById(id){
  const books = JSON.parse( fs.readFileSync("books.json"))
  const FilterBook = books.filter( book => book.id === id)[0]
  return FilterBook
}
function addBook(newBook){
  const books = JSON.parse( fs.readFileSync("books.json"))
  const newBookList = [...books, newBook]
  fs.writeFileSync('books.json', JSON.stringify(newBookList))
}

function editBook(edit, id){
  let books = JSON.parse( fs.readFileSync("books.json"))
  const modifiedIndex = books.findIndex(book => book.id === id)

  const editedContent = { ...books[modifiedIndex] , ...edit}

  books[modifiedIndex] = editedContent

  fs.writeFileSync("books.json", JSON.stringify(books))
}

function eraseBook(id){
  let books = JSON.parse( fs.readFileSync("books.json"))
  
  const updatedBooks = books.filter(e => e.id !== id)

  fs.writeFileSync("books.json", JSON.stringify(updatedBooks))
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  editBook,
  eraseBook
}