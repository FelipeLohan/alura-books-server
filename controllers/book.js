const {
  getAllBooks,
  getBookById,
  addBook,
  editBook,
  eraseBook,
} = require("../services/book.js");

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
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.nome && req.body.id) {
      addBook(newBook);
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

function patchBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    editBook(body, id);
    res.send("Item modificado com sucesso!");
  } catch {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      eraseBook(id);
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
  getLivros,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
