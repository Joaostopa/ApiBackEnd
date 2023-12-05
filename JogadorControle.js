import Jogador from "../models/Jogador";

class JogadorControle{

  async store(req, res){
    return res.json({ok : true})
  }
}

export default new JogadorControle();