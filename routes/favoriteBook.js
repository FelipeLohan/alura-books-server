const { Router } = require('express');
const {  getFavoriteBooks, postFavoriteBook, deleteFavoriteBook } = require('../controllers/favoriteBooks.js');
const router = Router();

router.get("/", getFavoriteBooks);

router.post("/:id", postFavoriteBook);

router.delete("/:id", deleteFavoriteBook)

module.exports = router;