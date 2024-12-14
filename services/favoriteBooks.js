const fs = require('fs');

function getAllFavoriteBooks(){
  return JSON.parse( fs.readFileSync("favoriteBooks.json"))
}

function postFavoriteBooks(id){
  const books = JSON.parse( fs.readFileSync("books.json"));
  const favoriteBooks = JSON.parse( fs.readFileSync("favoriteBooks.json"));
  const newBook = books.find(e => e.id === id)
  const newBookList = [...favoriteBooks, newBook];

  fs.writeFileSync('favoriteBooks.json', JSON.stringify(newBookList))
}

function deleteFavoriteBookById(id){
  const books = JSON.parse( fs.readFileSync("favoriteBooks.json"))

  const filteredBook = books.filter(e => e.id !== id);
  fs.writeFileSync('favoriteBooks.json', JSON.stringify(filteredBook));
}


module.exports = {
  getAllFavoriteBooks,
  deleteFavoriteBookById,
  postFavoriteBooks
}