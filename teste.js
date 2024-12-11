const fs = require("fs");

const booksData = JSON.parse(fs.readFileSync("./books.json"));

const newData = { id: "3", nome: "Livro legal 3"}

fs.writeFileSync("./books.json", JSON.stringify([...booksData, newData]));

console.log(booksData);