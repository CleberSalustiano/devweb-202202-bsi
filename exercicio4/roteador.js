class Roteador {
    rotas = [];
  
    add(rota, funcRota) {
      const rotaFunc = (req, res) => {
        if (req.url === rota) {
          funcRota(req, res);
        }
      }
  
      this.rotas.push(rotaFunc);
    }
  
  }
  
  module.exports = Roteador;