const Roteador = require('./roteador.js');
const Servidor = require('./servidor.js');

const roteador = new Roteador();

roteador.add("/", (req, res) => {
  res.end("<h1>Aoba</h1>")
})

const servidor = new Servidor(roteador);

servidor.start();