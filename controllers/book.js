const { getAllBooks } =  require("../services/book.js");

function getLivros(req, res) {
  try{
    const booksData = getAllBooks()
    res.send(booksData)
  } catch (error){
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getLivros
}