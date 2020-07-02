var express = require('express');
var router = express.Router();

const UsuarioController = require("../controllers/UsuarioController.js");
const ProdutoController = require("../controllers/ProdutoController.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/usuarios", UsuarioController.index);
router.post("/usuarios", UsuarioController.create);
router.delete("/usuarios/:id", UsuarioController.delete);
router.put("/usuarios/:id", UsuarioController.update);

router.get("/produtos", ProdutoController.index);
router.post("/produtos", ProdutoController.create);

module.exports = router;
