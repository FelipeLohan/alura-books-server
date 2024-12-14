const bookRouter = require('./routes/book.js');
const favoriteBookRouter = require('./routes/favoriteBook.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin: "*"}))

app.use('/books', bookRouter);
app.use('/favoritos', favoriteBookRouter);
const port = 8000;



app.listen(port, () => console.log(`Escutando a porta ${port}`));