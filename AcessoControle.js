import Usuario from '../models/Usuario';

class AcessoControle{

  async store(req, res){
    const { nome } = req.body;

    
    let usuario = await Usuario.findOne({ nome });

    if(!usuario){
      usuario = await Usuario.create({ nome });
    }
    
    return res.json(usuario);
  }

}

export default new AcessoControle();
