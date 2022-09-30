const fs = require('fs');
const http = require('http');
const Roteador = require("roteador.js")

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

class Servidor {
  constructor(roteador) {
    this.roteador = roteador;
  }

  start() {
    const server = http.createServer((req, res) => {
      const url = req.url;

      roteador.rotas.forEach(rota => rota(req, res));
    })

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  }

}


module.exports = Servidor; 