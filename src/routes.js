const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

/*
 @Author ATTILA TABORY
 Criação de rotas para o CRUD Veiculos.
 Utilizando Verbos HTTP:
  ---> GET/POST/DELETE/PUT

*/

router.get('/carros', CarroController.buscarTodos);
router.get('carros/:id', CarroController.buscandoUmCarro);
router.post('/carro', CarroController.inserir);
router.put('/carro/:id', CarroController.alterar)
router.delete('/carro/:id', CarroController.excluir)
module.exports = router;