const { getAllFavoriteBooks, deleteFavoriteBookById, postFavoriteBooks } = require('../services/favoriteBooks.js');

function getFavoriteBooks(req, res) {
  try {
    const booksData = getAllFavoriteBooks();
    res.send(booksData);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavoriteBook(req, res) {
  try {
    const id = req.params.id;
    if ( id && Number(id)) {
      postFavoriteBooks(id);
      res.status(201);
      res.send("Livro inserido com sucesso");
    } else {
      res.status(422);
      res.send("Nome é obrigatório");
    }
  } catch {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavoriteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteFavoriteBookById(id);
      res.send("Item excluido com sucesso!");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch {
    res.status(500);
    res.send(error.message);
  }
}


module.exports = {
  getFavoriteBooks,
  postFavoriteBook,
  deleteFavoriteBook
}