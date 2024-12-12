const { Router } = require("express");
const { getLivros, getBook, postBook, patchBook, deleteBook } = require("../controllers/book.js");
const router = Router();

router.get("/", getLivros); //retorna todos os livros

router.get("/:id", getBook); //retorna um livro de acordo com o id dele

router.post("/", postBook); //lança um novo livro no BD

router.patch("/:id", patchBook); //edita um livro ou informação dele

router.delete("/:id", deleteBook); //deleta o livro do BD

module.exports = router;