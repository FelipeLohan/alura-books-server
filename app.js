const bookRouter = require('./routes/book.js');
const express = require('express');
const app = express();

app.use('/books', bookRouter);
const port = 8000;



app.listen(port, () => console.log(`Escutando a porta ${port}`));