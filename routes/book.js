const { Router } = require("express");
const { getLivros, getBook, postBook } = require("../controllers/book.js");
const router = Router();

router.get("/", getLivros); //ler dados

router.get("/:id", getBook);

router.post("/", postBook);

router.patch("/", (req, res) =>
  res.send("Você fez uma requisição do tipo PATCH")
); //editar dados

router.delete("/", (req, res) =>
  res.send("Você fez uma requisição do tipo DELETE")
); //deletar dados

module.exports = router;