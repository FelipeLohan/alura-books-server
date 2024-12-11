const { Router } = require('express');
const { getLivros } = require ('../controllers/book.js');
const router = Router();

router.get('/', getLivros) //ler dados

router.post('/', (req, res) => res.send('Você fez uma requisição do tipo POST')); //inserir dados

router.patch('/', (req, res) => res.send('Você fez uma requisição do tipo PATCH')); //editar dados

router.delete('/', (req, res) => res.send('Você fez uma requisição do tipo DELETE')); //deletar dados

module.exports = router;